import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {style} from './style';

const ProfilePic = () => {
  const navigation = useNavigation();
  return (
    <View style={style.upperProfilePart}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Platform.OS === 'ios' ? style.GoBack : style.GoBackAndroid}>
        <Icon
          name="chevron-back"
          size={30}
          color="black"
          style={{
            marginLeft: 5,
            backgroundColor: 'white',
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>

      <View style={style.profilePart}>
        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CM62a88xZ_D3rXjqLWWbYXjx3Dow-MwDuVTBPBg&s',
            }}
            width={140}
            height={140}
            style={{borderRadius: 100}}
          />
        </View>
        <Text style={style.NameField}>Udit Tyagi</Text>
        <Text style={style.EmailField}>udittyagi455@gmail.com</Text>
      </View>
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({});
