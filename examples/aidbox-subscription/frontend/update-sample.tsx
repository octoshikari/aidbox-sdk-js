import { Badge, Button, Card, Container, Grid, Loading, Text, Link } from '@nextui-org/react'
import { Appointment } from 'aidbox-sdk/types'
import { DatePicker, Timeline } from 'antd'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { TickSquare } from 'react-iconly'

import { aidboxClient } from '../backend/aidbox-client.js'

import { socketIo } from './app.js'

const appointmentData = {
  resourceType: 'Appointment',
  status: 'booked',
  description: 'Discussion on the results of your recent MRI',
  start: '2030-12-10T09:00:00Z',
  end: '2030-12-10T11:00:00Z',
  created: '2023-10-10',
  participant: [{
    actor: {
      reference: 'Patient/03cb8799-bfbd-40fa-9ea8-96114cf1fec1',
      display: 'Peter James Chalmers'
    },
    status: 'accepted'
  }]
}

const prettifyDate = (dateString: string) => {
  if (!dateString) {
    return ''
  }
  const date = new Date(dateString)

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${day}-${month}-${year} ${hours}:${minutes}`
}

interface AppointmentTooltipProps {
  patientName: string;
  startDate: string;
  description: string;
}

const AppointmentTooltip = ({ patientName, startDate, description }: AppointmentTooltipProps) => {
  return (
    <Grid.Container gap={0.5}>
      <Grid
        xs={12}
        alignItems='center'
        css={{ h: '30px' }}
      >
        <Badge
          variant='dot'
          color='primary'
        />
        <Text
          css={{ ml: '$2' }}
          weight='bold'
        >Patient name:
        </Text>
        &nbsp;
        <Text>{patientName}</Text>
      </Grid>
      <Grid
        xs={12}
        alignItems='center'
        css={{ h: '30px' }}
      >
        <Badge
          color='primary'
          variant='dot'
        />
        <Text
          css={{ ml: '$2' }}
          weight='bold'
        >Start time:
        </Text>
        &nbsp;
        <Text>{prettifyDate(startDate)}</Text>
      </Grid>
      <Grid
        xs={12}
        alignItems='center'
        css={{ h: '30px' }}
      >
        <Badge
          color='primary'
          variant='dot'
        />
        <Text
          css={{ ml: '$2' }}
          weight='bold'
        >Description:
        </Text>
        &nbsp;
        <Text>{description}</Text>
      </Grid>
    </Grid.Container>
  )
}

export const UpdateSample = () => {
  const [appointment, setAppointment] = useState<Appointment>(null)
  const [appointmentStartTime, setAppointmentStartTime] = useState(dayjs())
  const [isAppointmentUpdated, setIsAppointmentUpdated] = useState(false)
  const [subsNotifications, setSubsNotifications] = useState(false)
  const [pushedAppointment, setPushedAppointment] = useState(false)
  const [pulledAppointment, setPulledAppointment] = useState(false)
  const [createdTasks, setCreatedTasks] = useState(false)

  useEffect(() => {
    const createAppointment = async () => {
      const data = await aidboxClient.createResource('Appointment', appointmentData)
      setAppointment(data)
      setAppointmentStartTime(dayjs(data.start))
    }
    createAppointment().catch(console.error)
  }, [])

  const updateAppointment = async () => {
    const data = await aidboxClient.patchResource('Appointment', appointment.id, { start: appointmentStartTime.toISOString() })
    setAppointment(data)
    setAppointmentStartTime(dayjs(data.start))
    setIsAppointmentUpdated(true)
  }

  socketIo.on('subs_notification_appointment', function () {
    setSubsNotifications(true)
  })

  socketIo.on('push_appointment', function () {
    setPushedAppointment(true)
  })

  socketIo.on('pull_appointment', function () {
    setPulledAppointment(true)
  })

  socketIo.on('create_task_appointment', function () {
    setCreatedTasks(true)
  })

  return (
    <>
      <Text h2>Update Appointment Subscription</Text>
      <Card>
        <Card.Body css={{ width: 'auto' }}>
          <Container
            css={{ width: 'auto' }}
            display='flex'
            wrap='wrap'
          >
            <Text
              css={{ 'text-align': 'center', 'margin-top': 0 }}
            >
              We have an appointment:
            </Text>
            {appointment
              ? <AppointmentTooltip
                  patientName={appointment.participant[0].actor.display}
                  startDate={appointment.start}
                  description={appointment.description}
                />
              : <Loading />}

            <Text>
              Let's update the start time and see how subscription works.
            </Text>
            <DatePicker
              showTime
              defaultValue={appointmentStartTime}
              value={appointmentStartTime}
              onChange={(date) => {
                if (date) {
                  setAppointmentStartTime(date)
                }
              }}

            />
            <Button
              onPress={updateAppointment}
              css={{ ml: '20px' }}
            >
              Update start time
            </Button>
            {isAppointmentUpdated && <Timeline
              style={{ marginTop: 30 }}
              items={[
                {
                  color: isAppointmentUpdated ? 'green' : 'gray',
                  children: 'Appointment updated'
                },
                {
                  color: subsNotifications ? 'green' : 'gray',
                  children: (
                    <>
                      <p>Subscriptions triggered</p>
                      <Link
                        block
                        href='https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/endpoints.ts#L177'
                        target='_blank'
                      >
                        Link to code
                      </Link>
                    </>
                  )
                },
                {
                  color: pushedAppointment ? 'green' : 'gray',
                  children: (
                    <>
                      <p>Event pushed to the queue</p>
                      <Link
                        block
                        href='http://localhost:9325/'
                        target='_blank'
                      >
                        Link to sqs UI
                      </Link>
                      <Link
                        block
                        href='https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/endpoints.ts#L92'
                        target='_blank'
                      >
                        Link to code
                      </Link>
                    </>
                  )
                },
                {
                  color: pulledAppointment ? 'green' : 'gray',
                  children: (
                    <>
                      <p>Events pulled from the queue</p>
                      <Link
                        block
                        href='https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/periodic-jobs.ts#L12'
                        target='_blank'
                      >
                        Link to code
                      </Link>
                    </>
                  )
                },
                {
                  color: createdTasks ? 'green' : 'gray',
                  children: (
                    <>
                      <p>Task resources created</p>
                      <Link
                        block
                        href='https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/workers.ts#L85'
                        target='_blank'
                      >
                        Link to code
                      </Link>
                      <p>Show something form the task</p>
                    </>
                  )
                },
                {
                  color: createdTasks ? 'green' : 'gray',
                  dot: <TickSquare set='light' />,
                  children: <p>Success</p>
                }
              ]}
                                     />}
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}
