// import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// export default function WelcomeScreen() {
//     const navigation = useNavigation();
//   return (
//     <SafeAreaView className="flex-1 flex justify-around bg-white">
//         {/* title */}
//         <View className="space-y-2">
//             <Text style={{fontSize: wp(10)}} className="text-center font-bold text-gray-700">
//                 CareTaker
//             </Text>
//             <Text style={{fontSize: wp(4)}} className="text-center tracking-wider font-semibold text-gray-600">
//                 Virtual Assistant for You
//             </Text>
//         </View>
        
//         {/* assistant image */}
//         <View className="flex-row justify-center">
//             <Image  
//                 source={require('../../assets/images/catIcon.png')}
//                 style={{height: wp(75), width: wp(75)}}
//             />
//         </View>
        
//         {/* start button */}
//         <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-purple-500 mx-5 p-4 rounded-2xl">
//             <Text style={{fontSize: wp(6)}} className="text-center font-bold text-white">
//                 Get Started
//             </Text>
//         </TouchableOpacity>
//     </SafeAreaView>
//   )
// }

import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#caa8f5'}}>
        {/* title */}
        <View style={{marginVertical: 20}}>
            <Text style={{fontSize: wp(13), textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
                CareTaker
            </Text>
            <Text style={{fontSize: wp(6), textAlign: 'center', fontWeight: '900', color: 'white'}}>
                Virtual Assistant for You
            </Text>
        </View>
        
        {/* assistant image */}
        <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: hp(10)}}>
            <Image  
                source={require('../../assets/images/catIcon3-2.png')}
                style={{height: wp(50), width: wp(90)}}
            />
        </View>
        
        {/* start button */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: '#592E83', marginVertical: hp(5),marginHorizontal: hp(7), paddingVertical: hp(3), paddingHorizontal: wp(3), borderRadius: 20 }}>
            <Text style={{ fontSize: wp(8), fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                Get Started
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
