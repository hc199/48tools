import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import style from './style.sass';

function Navs(props) {
  return (
    <Row type="flex" align="top" justify="start">
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/LiveCatch" title="口袋48直播抓取">
              <img src={ require('../image/hty1.webp') } alt="口袋48直播抓取" />
            </Link>
          </dt>
          <dd>
            <Link to="/LiveCatch">直播抓取</Link>
          </dd>
        </dl>
      </Col>
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/PlayBackDownload" title="口袋48录播下载">
              <img src={ require('../image/xsy1.webp') } alt="口袋48录播下载" />
            </Link>
          </dt>
          <dd>
            <Link to="/PlayBackDownload">录播下载</Link>
          </dd>
        </dl>
      </Col>
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/BiliBili" title="B站直播抓取">
              <img src={ require('../image/lyy1.webp') } alt="B站直播抓取" />
            </Link>
          </dt>
          <dd>
            <Link to="/BiliBili">B站直播抓取</Link>
          </dd>
        </dl>
      </Col>
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/Cut" title="视频剪切">
              <img src={ require('../image/lxh1.webp') } alt="视频剪切" />
            </Link>
          </dt>
          <dd>
            <Link to="/Cut">视频剪切</Link>
          </dd>
        </dl>
      </Col>
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/MergeVideo" title="视频合并">
              <img src={ require('../image/tsl1.webp') } alt="视频合并" />
            </Link>
          </dt>
          <dd>
            <Link to="/MergeVideo">视频合并</Link>
          </dd>
        </dl>
      </Col>
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/MoDian" title="摩点项目集资统计">
              <img src={ require('../image/llf1.webp') } alt="摩点项目集资统计" />
            </Link>
          </dt>
          <dd>
            <Link to="/MoDian">摩点项目集资统计</Link>
          </dd>
        </dl>
      </Col>
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/LiveDownload" title="公演录播下载">
              <img src={ require('../image/zmh1.webp') } alt="公演录播下载" />
            </Link>
          </dt>
          <dd>
            <Link to="/LiveDownload">公演录播下载</Link>
          </dd>
        </dl>
      </Col>
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/InLive48" title="公演官方直播抓取">
              <img src={ require('../image/rxy1.webp') } alt="公演官方直播抓取" />
            </Link>
          </dt>
          <dd>
            <Link to="/InLive48">公演官方直播抓取</Link>
          </dd>
        </dl>
      </Col>
      <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
        <dl className={ style.linkGroup }>
          <dt className={ style.bPro }>
            <Link to="/AvDownload" title="B站视频下载">
              <img src={ require('../image/ler1.webp') } alt="B站视频下载" />
            </Link>
          </dt>
          <dd>
            <Link to="/AvDownload">B站视频下载</Link>
          </dd>
        </dl>
      </Col>
    </Row>
  );
}

export default Navs;