import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const {width} = Dimensions.get('window');

const App = () => {
  const [qrValue, setQrValue] = useState('user-id-12345-abcde');
  
  const refreshQRCode = () => {
    const timestamp = Date.now();
    const newQrValue = `user-id-12345-abcde-${timestamp}`;
    setQrValue(newQrValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Virtual Membership Card</Text>
        </View>
        
        <View style={styles.cardContainer}>
          <View style={styles.membershipCard}>
            {/* Card Header */}
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>MEMBERSHIP CARD</Text>
              <View style={styles.platinumBadge}>
                <Text style={styles.platinumText}>PLATINUM</Text>
              </View>
            </View>
            
            {/* Profile Section */}
            <View style={styles.profileSection}>
              <View style={styles.profileImageContainer}>
                <Image 
                  source={require('./assets/profile_placeholder.png')} 
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.userName}>Alex Ray</Text>
                <Text style={styles.membershipLevel}>Platinum Member</Text>
                <Text style={styles.memberId}>ID: 12345</Text>
              </View>
            </View>
            
            {/* QR Code Section */}
            <View style={styles.qrSection}>
              <Text style={styles.qrTitle}>Scan for Check-in</Text>
              <View style={styles.qrContainer}>
                <QRCode
                  value={qrValue}
                  size={150}
                  color="#1a1a2e"
                  backgroundColor="#ffffff"
                />
              </View>
              <Text style={styles.qrValue} numberOfLines={2}>
                {qrValue}
              </Text>
            </View>
            
            {/* Card Footer */}
            <View style={styles.cardFooter}>
              <Text style={styles.validText}>Valid Until: Dec 2024</Text>
              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>PREMIUM</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Refresh Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.refreshButton} onPress={refreshQRCode}>
            <Text style={styles.refreshButtonText}>🔄 Refresh QR Code</Text>
          </TouchableOpacity>
        </View>
        
        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>How to use:</Text>
          <Text style={styles.infoText}>
            • Present this card at partner locations{'\n'}
            • Tap "Refresh QR Code" for time-sensitive access{'\n'}
            • QR code updates with current timestamp for security
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  membershipCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
    letterSpacing: 1,
  },
  platinumBadge: {
    backgroundColor: '#ffd700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },
  platinumText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a2e',
    letterSpacing: 0.5,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImageContainer: {
    marginRight: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ffd700',
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 5,
  },
  membershipLevel: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 3,
  },
  memberId: {
    fontSize: 14,
    color: '#999999',
  },
  qrSection: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
  },
  qrTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 15,
  },
  qrContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  qrValue: {
    fontSize: 10,
    color: '#666666',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  validText: {
    fontSize: 12,
    color: '#666666',
  },
  logoContainer: {
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  logoText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  refreshButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  refreshButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#cccccc',
    lineHeight: 20,
  },
});

export default App;

