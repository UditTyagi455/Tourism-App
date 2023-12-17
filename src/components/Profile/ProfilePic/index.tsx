import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const ProfilePic = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const logout = () => {
    auth()
  .signOut()
  .then(() => {
    console.log('User signed out!')
    setShowModal(false);
    AsyncStorage.removeItem("Auth_token");
    navigation.navigate("InitialPage")
  }
    );
    
  }
  return (
    <View style={style.upperProfilePart}>
      <View style={style.headerPart}>
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
        <View>
          <TouchableOpacity
            style={Platform.OS === 'ios' ? style.GoBack : style.menuAndroid}
            onPress={() => setShowModal(!showModal)}>
            <Icon
              name="menu"
              size={35}
              color="black"
              style={
                {
                  // marginLeft: 5,
                  // backgroundColor: 'white',
                  // borderRadius: 50,
                }
              }
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View
              style={{
                width: '100%',
                height: Dimensions.get('screen').height * 0.5,
                position: 'absolute',
                right: 0,
                bottom: 0,
                borderRadius: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: '#343a40',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <Text></Text>
                <Icon
                  name="close"
                  size={35}
                  color="white"
                  style={
                    {
                      // marginLeft: 5,
                      // backgroundColor: 'white',
                      // borderRadius: 50,
                    }
                  }
                  onPress={() => setShowModal(false)}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    padding: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: "100%",
                    margin: 8,
                    alignItems: 'center',
                    position: 'absolute',
                    top: 300,
                    backgroundColor: "#343a50"
                  }} 
                  onPress={() => logout()}>
                  <Text style={{fontSize: 20, color: 'white'}}>Logout</Text>
                  <Icon
                    name="chevron-forward"
                    size={25}
                    color="white"
                    style={
                      {
                        // marginLeft: 5,
                        // backgroundColor: 'white',
                        // borderRadius: 50,
                      }
                    }
                    onPress={() => setShowModal(false)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>

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
