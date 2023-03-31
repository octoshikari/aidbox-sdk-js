(ns generator.cli
  (:gen-class)
  (:require [zen.cli]
            [clojure.pprint]
            [zen.core]
            [zen.store]
            [clojure.string]
            [generator.types-generation :as types-gen]))

(defn get-sdk [args]
  (types-gen/get-sdk (zen.cli/get-pwd) (last (clojure.string/split (str (first args)) #"="))))

(defn get-types [args]
  (types-gen/get-types (zen.cli/get-pwd) (last (clojure.string/split (str (first args)) #"="))))

(defmethod zen.cli/command 'sdk-cli/get-sdk [_ args _]
  (get-sdk args))

(defmethod zen.cli/command 'sdk-cli/get-types [_ args _]
  (get-types args))

(defn -main [& args]
  (let [ztx (zen.core/new-context)
        _ (zen.core/read-ns ztx 'sdk-cli)]
      (zen.cli/cli ztx 'sdk-cli/config args)
      (System/exit 0)))