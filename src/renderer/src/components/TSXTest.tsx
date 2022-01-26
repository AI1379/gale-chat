import { defineComponent, PropType } from 'vue';

interface Props {
  msg: string;
}

export default defineComponent({
  props: {
    msg: {
      type: String as PropType<Props['msg']>,
      default: undefined,
    },
  },
  setup(props) {
    return () => (<div> Test TSX Successfully<br />msg: {props.msg}</div>);
  },
});
