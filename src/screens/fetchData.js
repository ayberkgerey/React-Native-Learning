import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';

export default function FetchData() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{padding: 20, marginTop: 100}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text style={styles.films}>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  films: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
