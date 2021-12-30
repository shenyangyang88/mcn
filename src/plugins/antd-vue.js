import {
  ConfigProvider,
  Layout,
  Row,
  Col,
  Space,
  Form,
  Input,
  Button,
  Select,
  Menu,
  Card,
  Avatar,
  Table,
  Badge,
  Tooltip,
  Modal,
} from "ant-design-vue";
/**
 * antd vue 插件
 *
 * 按需加载组件
 */
export default class AntdVuePlugin {
  static install(app) {
    app
      .use(ConfigProvider)
      .use(Layout)
      .use(Row)
      .use(Col)
      .use(Space)
      .use(Form)
      .use(Input)
      .use(Button)
      .use(Select)
      .use(Menu)
      .use(Card)
      .use(Avatar)
      .use(Table)
      .use(Badge)
      .use(Tooltip)
      .use(Modal);
  }
}
