import { useCallback, useContext, useEffect, useRef } from 'react';
import { prefix } from '../../config';
import { EditorContext } from '../../Editor';
import { appendHandler } from '../../utils/dom';
import { ToolbarProp } from './';

export const useSreenfull = (props: ToolbarProp) => {
  let { screenfull } = props;
  const { previewOnly } = useContext(EditorContext);
  // 是否组件内部全屏标识
  const screenfullMe = useRef(false);

  // 该处使用useCallback并不是为了减少子组件渲染次数
  // 而是screenfull获取到实例后要正确的初始化该方法
  const fullScreenHandler = useCallback(() => {
    if (screenfull.isEnabled) {
      screenfullMe.current = true;
      if (screenfull.isFullscreen) {
        screenfull.exit();
      } else {
        screenfull.request();
      }
    } else {
      console.error('browser does not support screenfull!');
    }
  }, [screenfull]);

  const screenfullLoad = () => {
    // 复制实例
    screenfull = window.screenfull;
    // 注册事件
    if (screenfull && screenfull.isEnabled) {
      screenfull.on('change', () => {
        if (screenfullMe.current) {
          screenfullMe.current = false;
          props.updateSetting('fullscreen');
        }
      });
    }
  };

  useEffect(() => {
    let screenScript: HTMLScriptElement;
    // 非预览模式且未提供screenfull时请求cdn
    if (!previewOnly && !props.screenfull) {
      screenScript = document.createElement('script');
      screenScript.src = props.screenfullJs;
      screenScript.onload = screenfullLoad;
      screenScript.id = `${prefix}-screenfull`;

      appendHandler(screenScript, 'screenfull');
    }

    // 提供了对象直接监听事件，未提供通过screenfullLoad触发
    if (!previewOnly && screenfull && screenfull.isEnabled) {
      screenfull.on('change', () => {
        if (screenfullMe.current) {
          screenfullMe.current = false;
          props.updateSetting('fullscreen');
        }
      });
    }
  }, []);
  return { fullScreenHandler, screenfullLoad };
};
