import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';

export default defineComponent({
  setup() {
    let count = 0;
    const addCount = () => { count += 1; };
    return () => (
      <ElButton onClick={addCount}>TSXButton count:{count}</ElButton>);
  },
});
