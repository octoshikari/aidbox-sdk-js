(ns generator.utils-test
  (:require [clojure.test :as t]
            [generator.utils :as gut]))

(t/deftest get-desc-test
  (t/is (= "/* My description */\n"
           (gut/get-desc {:zen/desc "My description"})))

  (t/is (= "/*  */\n"
           (gut/get-desc {:zen/desc ""})))

  (t/is (= nil
           (gut/get-desc {}))))

(t/deftest get-not-required-filed-sign-test
  (t/is (= "?"
           (gut/get-not-required-filed-sign {::require '({root nil}) :path [:keys :value]})))

  (t/is (= "?"
           (gut/get-not-required-filed-sign {::require '({:keys.:repeat nil} {root nil}) :path [:keys :repeat]}))))

(t/deftest ggenerate-exclusive-keys-test
  (t/is (= {":keys.:value" #{#{:Range :CodeableConcept :Quantity}}}
           (gut/generate-exclusive-keys
            {:path [:keys :value]} {:exclusive-keys #{#{:Range :CodeableConcept :Quantity}}})))

  (t/is (= {":keys" #{#{:Range}}}
           (gut/generate-exclusive-keys
            {:path [:keys]} {:exclusive-keys #{#{:Range}}}))))

(t/deftest generate-enum-test
  (t/is (= "'24' | 'none' | 'day-before'"
           (gut/generate-enum  [{:value 24} {:value "none"} {:value "day-before"}])))
  (t/is (= "'24'"
           (gut/generate-enum  [{:value 24}])))
  (t/is (= ""
           (gut/generate-enum  []))))
