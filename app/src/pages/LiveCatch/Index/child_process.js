import store from '../../../store/store';
import { liveChange } from '../reducer/index';
import post from '../../../components/post/post';

// 子进程关闭
async function child_process_cb() {
  const s = store.getState().get('liveCatch').get('index');
  const m = s.get('liveCatch');

  m.forEach((value, key) => {
    if (value.child.exitCode !== null || value.child.killed) {
      m.delete(key);
    }
  });

  const data = await post(0, true);

  store.dispatch({
    type: liveChange.toString(),
    payload: {
      map: m,
      liveList: 'liveList' in data.content ? data.content.liveList : []
    }
  });
}

/* 子进程监听 */
export function child_process_stdout(data) {
  // console.log(data.toString());
}

export function child_process_stderr(data) {
  // console.log(data.toString());
}

export function child_process_exit(code, data) {
  console.log('exit: ' + code + ' ' + data);
  child_process_cb();
}

export function child_process_error(err) {
  console.error('error: \n' + err);
  child_process_cb();
}