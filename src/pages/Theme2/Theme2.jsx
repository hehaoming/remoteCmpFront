import React, { Component } from 'react';
import IntroBanner from '../ThemeHome/components/IntroBanner';
import BlackFooter from '../ThemeHome/components/BlackFooter';
import BasicTab from "../ThemeHome/components/BasicTab";
import Overview from "../ThemeHome/components/Overview";
import {Col, Row} from "@alifd/next/lib/grid";
import globalConf from "../../globalConfig";

const introBannerProp={
  themeId: 2,
  cmpInfoConf:{},
  dataDownloadConf:{
    dataUrl: 'https://pan.baidu.com/s/1qRT3He79iWiey6E9paBp9Q',
    fetchCode: 'evc1',
  },
  commitResConf:{},
  hotRankConf:{},
};

export default class Theme2 extends Component {
  static displayName = 'Theme2';
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row gutter="20" wrap>
        <Col l="24" xxs="24">
          <IntroBanner themeConf={globalConf.themeConf[1]} />
        </Col>
        <Col l="24" xxs="24">
          <div  style = {styles.sOverview}> <Overview themeConf={globalConf.themeConf[1]}/></div>

        </Col>
        <Col l="24" xxs="24">
          <div style = {styles.sOverview}>
            <BasicTab {...introBannerProp}/>
          </div>
        </Col>
      </Row>
    );
  }
}

const styles = {
  sOverview: {
    marginTop: '20px',
    marginLeft:'25px',
    marginRight:'25px',
    borderBottom:'1px solid rgba(130, 129, 129, 0.32)'
  },
}
