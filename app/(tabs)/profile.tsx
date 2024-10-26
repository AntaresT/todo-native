import { Colors } from '@/constants/Colors';
import { useTodoProvider } from '@/providers/todoProvider';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';

type MonthsArray = {
  month: string;
  days: number;
}

const months: MonthsArray[] = [
  { month: 'Janeiro', days: 31 },
  { month: 'Fevereiro', days: 28 }, // Considerando anos não bissextos
  { month: 'Março', days: 31 },
  { month: 'Abril', days: 30 },
  { month: 'Maio', days: 31 },
  { month: 'Junho', days: 30 },
  { month: 'Julho', days: 31 },
  { month: 'Agosto', days: 31 },
  { month: 'Setembro', days: 30 },
  { month: 'Outubro', days: 31 },
  { month: 'Novembro', days: 30 },
  { month: 'Dezembro', days: 31 }
];

export default function ProfileScreen() {

  const [selectedMonth, setSelectedMonth] = useState<MonthsArray>({} as MonthsArray);

  const CategoryColors  = {
    bad: Colors.dark.red,
    medium: Colors.dark.yellow,
    good: Colors.dark.green,    
  }

  const mockDays = [
    { dia: 5, status: 'good' },
    { dia: 12, status: 'bad' },
    { dia: 18, status: 'medium' }
  ];

  const obterStatusDoDia = (day: number) => {
    const filledDay = mockDays.find(d => d.dia === day);
    return filledDay && filledDay.status ;
  };

  const {mood} = useTodoProvider();

  CategoryColors[mood as keyof typeof CategoryColors]

  const renderizarDias = () => {
    if (!selectedMonth) return null;

    const diasArray = Array.from({ length: selectedMonth.days }, (_, i) => i + 1);

    return (
      <View style={styles.daysContainer}>
        {diasArray.map(day => {
          const status = obterStatusDoDia(day);
          return (
            <View 
              key={day} 
              style={[styles.squareDay, {backgroundColor: status ? CategoryColors[status as keyof typeof      CategoryColors] : Colors.dark.gray}]}>
          </View>)
        })}
      </View>
    );
  };

  useEffect(() => {
    // Pega o mês atual (0 para janeiro, 1 para fevereiro, etc.)
    const mesAtualIndex = new Date().getMonth();
    setSelectedMonth(months[mesAtualIndex]);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá {"<user>"}</Text>
      <View style={styles.containerDays}>
        <FlatList
          data={months}
          keyExtractor={(item) => item.month}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.monthBtn,
                selectedMonth?.month === item.month && styles.btnSelectedMonth
              ]}
              onPress={() => setSelectedMonth(item)}
            >
              <Text style={styles.txtMonth}>{item.month}</Text>
            </TouchableOpacity>
          )}
        />

        {renderizarDias()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.bgScreen,
    gap: 30,
    height: "100%",
    padding: 41,
    width: "100%",
  },
  title: {
    fontFamily: "inter400",
    fontSize: 24,
    marginTop: 40,
    color: "white"
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  containerDays: {
    flex: 0,
    paddingTop: 50,
    alignItems: 'center',
  },
  monthBtn: {
    padding: 10,
    backgroundColor: Colors.dark.darkBlue,
    borderRadius: 10,
    marginHorizontal: 5,
    height: 40,
  },
  btnSelectedMonth: {
    backgroundColor: Colors.dark.blue,
  },
  txtMonth: {
    color: "white",
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    borderColor: Colors.dark.blue,
    borderWidth: 2,
    borderRadius: 10,
    padding: 57,
    gap: 10
  },
  squareDay: {
    width: 20,
    height: 20,
    backgroundColor: Colors.dark.gray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  textDay: {
    fontSize: 16,
  },
});
