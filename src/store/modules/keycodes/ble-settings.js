export default [
    { label: 'BLE_Settings', width: 'label', group: true },
  
    {
      label: 'Keyboard settings',
      width: 'label',
    },
  
    {
      name: 'Dis BLE',
      code: 'BLE_DIS',
      title: 'Disable BLE HID sending',
      width: 1500
    },
    {
      name: 'En BLE',
      code: 'BLE_EN',
      title: 'Enable BLE HID sending',
      width: 1500
    },
    /*
    {
      name: 'Toggle BLE',
      code: 'BLE_TG',
      title: 'Toggle enable/disable BLE HID sending',
      width: 1500
    },
    */
    {
      name: 'Only BLE',
      code: 'BLE_SEL',
      title: 'Enable BLE and disable USB',
      width: 1500
    },
    {
        width: 0
    },
    {
      name: 'Dis USB',
      code: 'USB_DIS',
      title: 'Disable USB HID sending',
      width: 1500
    },
    {
      name: 'En USB',
      code: 'USB_EN',
      title: 'Enable USB HID sending',
      width: 1500
    },
    /*
    {
      name: 'Toggle USB',
      code: 'USB_TG',
      title: 'Toggle enable/disable USB HID sending',
      width: 1500
    },
    */
    {
      name: 'Only USB',
      code: 'USB_SEL',
      title: 'Enable USB and disable BLE',
      width: 1500
    },
    {
        width: 0
    },
    {
      name: 'Display BAT',
      code: 'BATT_LV',
      title: 'Display battery level in milli volts',
      width: 1500
    },
    {
      name: 'DFU Mode',
      code: 'ENT_DFU',
      title: 'Start bootloader',
      width: 1500
    },
    {
      name: 'Sleep Mode',
      code: 'ENT_SLP',
      title: 'Deep sleep mode',
      width: 1500
    },
    {
      label: 'BLE Settings',
      width: 'label'
    },
    {
      name: 'Add new device',
      code: 'AD_WO_L',
      title: 'Start advertising without whitelist',
      width: 1500
    },
    {
      name: 'Del all device',
      code: 'DELBNDS',
      title: 'Delete all bonding',
      width: 1500
    },
    {
      name: 'Show device index',
      code: 'DEVICE_ID',
      title: 'Show current device index by LED indicator',
      width: 1500
    },
    {
        width: 0
    },
    {
      name: 'Device 1',
      code: 'ADV_ID0',
      title: 'Start advertising to PeerID 0',
      width: 1500
    },
    {
      name: 'Device 2',
      code: 'ADV_ID1',
      title: 'Start advertising to PeerID 1',
      width: 1500
    },
    {
      name: 'Device 3',
      code: 'ADV_ID2',
      title: 'Start advertising to PeerID 2',
      width: 1500
    },
    {
        width: 0
    },
    {
      name: 'Del device 1',
      code: 'DEL_ID0',
      title: 'Delete bonding of PeerID 0',
      width: 1500
    },
    {
      name: 'Del device 2',
      code: 'DEL_ID1',
      title: 'Delete bonding of PeerID 1',
      width: 1500
    },
    {
      name: 'Del device 3',
      code: 'DEL_ID2',
      title: 'Delete bonding of PeerID 2',
      width: 1500
    }
  ];
  