import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Features() {
  return (
    <ScrollView style={{height: hp(60)}} bounces={false} showsVerticalScrollIndicator={false} className="space-y-4">
        <Text style={{fontSize: wp(8), color: 'white'}} className="font-semibold text-white-700">Features</Text>
        <View className="bg-orange-100 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image className="rounded-ful" source={require('../../assets/images/aiIcon.png')} style={{height: hp(4), width: hp(4)}} />
                <Text style={{fontSize: wp(4.8), color: '#230C33'}} className="font-semibold text-gray-700">Personalized Chat</Text>
            </View>
            
            <Text style={{fontSize: wp(3.8), color: '#230C33'}} className="text-gray-700 font-medium">
                We offer a customized chat experience that tailors itself to your preferences and needs.
            </Text>
        </View>
        <View className="bg-purple-200 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image className="rounded-ful" source={require('../../assets/images/aiIcon.png')} style={{height: hp(4), width: hp(4)}} />
                <Text style={{fontSize: wp(4.8), color: '#230C33'}} className="font-semibold text-gray-700">Daily Tasks</Text>
            </View>
            
            <Text style={{fontSize: wp(3.8), color: '#230C33'}} className="text-gray-700 font-medium">
                We support daily routines through reminders for medication schedules, walks, and appointments, promoting independence
            </Text>
        </View>
        <View className="bg-orange-100 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image className="rounded-ful" source={require('../../assets/images/aiIcon.png')} style={{height: hp(4), width: hp(4)}} />
                <Text style={{fontSize: wp(4.8), color: '#230C33'}} className="font-semibold text-gray-700">Emergency Support</Text>
            </View>
            
            <Text style={{fontSize: wp(3.8), color: '#230C33'}} className="text-gray-700 font-medium">
                We detect anomalies and offers emergency support when you are in an unfamiliar area
            </Text>
        </View>
    </ScrollView>
  )
}