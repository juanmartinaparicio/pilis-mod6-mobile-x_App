import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#de8744' }}>
      <View style={styles.container}>
        <View style={styles.alert}>
          <View style={styles.alertContent}>
            <View style={styles.alertTop}>
              <FeatherIcon color="#fae4a8" name="check-circle" size={14} />

              <Text style={styles.alertTopText}>All done!</Text>
            </View>

            <Text style={styles.alertTitle}>Your payment was successful!</Text>

            <Text style={styles.alertMessage}>
              Thank you for supporting MyApp!
              {'\n'}
              We are looking forward to helping you!
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>OK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  alert: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  alertContent: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  alertTop: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertTopText: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 4,
    color: '#fae4a8',
    textAlign: 'center',
  },
  alertTitle: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  alertMessage: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fae4a8',
    textAlign: 'center',
    marginBottom: 36,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000',
  },
});