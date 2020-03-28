import * as React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useStyle } from "./../../styles/styles.js";
import { ActionButton } from "../../components/Buttons";
import { InfoViewDiagnosis } from "./../../components/InfoViewDiagnosis";
import { SourceItem } from "../../components/FooterComponents";


export function Diagnosis({ navigation, response }) {
  const { styles } = useStyle("sectionTitle", "container", "boxContainer", "surveyQuestionText", "scrollViewContent");

  var symptoms = [];

  for (var a in response) {
    if (response[a]["Percentage"]) {
      console.log(response[a]["Symptom"]);
      symptoms.push({
        title: response[a]["Symptom"],
        body: response[a]["Percentage"]
      });
    }
  }
  if (response == "") {
    symptoms = [];
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
      <Text style={[styles.sectionTitle, { textAlign: "center", marginTop: 20 }]}>Symptoms</Text>
      
      {symptoms.map(symptom => {
        return (
          <InfoViewDiagnosis
            title={symptom.title}
            body={
              symptom.body +
              "% of people who tested positive have this symptom."
            }
          />
        );
      })}
      {/* <View style={{ height: 50 }} /> */}
      <View style={styles.boxContainer}>
        <Text style={styles.surveyQuestionText}>
          You can find local information on COVID-19 data and 
          testing centers here:
          </Text>
        <View style={{ height: 10 }} />
        <ActionButton
          title={"Find Center"}
          action={() => navigation.navigate("Testing")}
        style={{marginHorizontal: 10}}
        />
      </View>
      <SourceItem
        navigation={navigation}
        typeSource={"Information Sources"}
        sourcesList={[
          {
            title: "World Health Organization",
            headline:
              "Report of the WHO-China Joint Mission on Coronavirus Disease 2019 (COVID-19)",
            url:
              "https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf"
          }
        ]}
        key={"sourceList"}
      />
    </ScrollView>
  );
}
