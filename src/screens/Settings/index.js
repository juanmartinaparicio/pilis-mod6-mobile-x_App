import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Switch,
  SafeAreaView,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    header: 'Preferencias',
    items: [
      { icon: 'globe', label: 'Language', value: 'Español', type: 'input' },
      { icon: 'moon', label: 'Dark Mode', value: false, type: 'boolean' },
      { icon: 'wifi', label: 'Use Wi-Fi', value: true, type: 'boolean' },
    ],
  },
  {
    header: 'Ayuda',
    items: [
      { icon: 'flag', label: 'Reportar Fallas', type: 'link' },
      { icon: 'mail', label: 'Contactanos', type: 'link' },
    ],
  },
];

// eslint-disable-next-line no-unused-vars
function SectionRow({ label, value, type, index, onPress }) {
  return (
    <View style={[{ marginLeft: 12 }, index !== 0 && styles.splitline]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.sectionBodyRow}>
          <Text style={styles.sectionBodyRowLabel}>{label}</Text>
          <View style={styles.spacer} />
          {type === 'input' && (
            <Text style={styles.sectionBodyRowValue}>{value}</Text>
          )}
          {type === 'boolean' && <Switch value={value} />}
          {(type === 'input' || type === 'link') && (
            <FeatherIcon
              style={{ marginLeft: 6 }}
              name='chevron-right'
              size={24}
              color='#ababab'
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Configuraciones</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Cuenta</Text>
        </View>
        <View style={styles.profile}>
          <Image
            alt=''
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />

          <View style={styles.profileBody}>
            <Text style={styles.profileName}>Juan Martin</Text>

            <Text style={styles.profileHandle}>juan.martin@mail.com</Text>
          </View>
        </View>
      </View>

      {SECTIONS.map(({ header, items }) => (
        <View style={styles.section} key={header}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{header}</Text>
          </View>
          <View style={styles.sectionBody}>
            {items.map(({ label, type, value }, index) => {
              const isFirst = index === 0;
              const isLast = index === items.length - 1;
              return (
                <View
                  key={index}
                  style={[
                    styles.rowWrapper,
                    index === 0 && { borderTopWidth: 0 },
                    isFirst && styles.rowFirst,
                    isLast && styles.rowLast,
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                  >
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>{label}</Text>

                      <View style={styles.rowSpacer} />

                      {type === 'input' && (
                        <Text style={styles.rowValue}>{value}</Text>
                      )}

                      {type === 'boolean' && <Switch value={value} />}

                      {(type === 'input' || type === 'link') && (
                        <FeatherIcon
                          color='#ababab'
                          name='chevron-right'
                          size={22}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionHeader: {
    padding: 8,
    paddingLeft: 12,
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#adadad',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profile: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 0,
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowLabel: {
    fontSize: 17,
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#ababab',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
