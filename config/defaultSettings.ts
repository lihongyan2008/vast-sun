import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',//dark light
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',//side
  contentWidth: 'Fluid',//Fixed
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: true,
  title: 'Vast Sun',
  pwa: false,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;
