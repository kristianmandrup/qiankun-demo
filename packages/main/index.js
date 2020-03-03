import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import Framework from './Framework';
import './register' // register apps

/**
 * react render
 */
function render({ appContent, loading }) {
  // @ts-ignore
  const container = document.getElementById('container');
  ReactDOM.render(<Framework content={appContent} loading={loading} />, container);
}

/**
 * Step1
 */
render({ appContent: '', loading: true });

/**
 * Step2: register apps
 */

/**
 * Step3: Default app
 */
setDefaultMountApp('/react16');

/**
 * Step4 
 */
start({
  prefetch: true,
  jsSandbox: true,
  singular: true,
  fetch: window.fetch,
});


