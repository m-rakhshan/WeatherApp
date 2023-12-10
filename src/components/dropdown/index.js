import {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {MoreHorizontal} from 'lucide-react-native';
//custom imports
import colors from '../../constants/colors';
import styles from './styles';

const FilterDropDown = ({
  options,
  selectedValue,
  onSelect,
  setIsOpen,
  isOpen,
}) => {
  const [isOpenIndex, setIsOpenIndex] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (index, value) => {

    setIsOpenIndex(index);
    onSelect(value);

    toggleDropdown();
  };
  return (
    <View style={{zIndex:1}}>
      <View style={styles.container}>
        <Text style={styles.selectedText}>{selectedValue}</Text>
        <TouchableOpacity
          onPress={toggleDropdown}
          activeOpacity={0.5}
          style={{
            marginLeft: 10,
          }}>
          <MoreHorizontal
            size={35}
            color={colors.primary_teal}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <View>
        {isOpen && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              style={{backgroundColor: colors.white}}
              onPress={toggleDropdown}>
              {options.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.innerContainer(index, isOpenIndex)}
                  onPress={() => handleSelect(index, item.name)}>
                  {item.icon(index == isOpenIndex)}
                  <Text style={styles.dropdownItem(index, isOpenIndex)}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default FilterDropDown;
