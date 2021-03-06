import React, { Component } from 'react';
import { Button, Step, Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';

const dataSource = () => {
  return [
    {
      condition: '赛题一',
      validate: true,
      title: '遥感图像场景分类',
      url: require('./images/theme1.png'),
      operation: '查看详情',
      regist: '报名注册',
      description:
        '遥感图像场景分类竞赛任务旨在对空间信息网络中场景级的 遥感图像进行内容解译，高效地对遥感图像中的感兴趣及非感兴趣场景 进行自动化的识别和区分，进而针对场景类别有选择性的压缩遥感图像， 减少待传输图像数据的容量，有效缓解数据链路传输压力',
    },
    {
      condition: '赛题二',
      validate: false,
      title: '高分辨率 SAR 遥感图像建筑物提取 ',
      url: require('./images/theme2.png'),
      operation: '查看详情',
      regist: '报名注册',
      description:
        '空间信息网络建设中的 SAR 遥感平台成像受气候、光照等条件的限制程度较小，具因而能使空间信息网络具备获取全天时、全天候的空间信息的能力。基于高分辨率 SAR 图像的建筑物解译对于城市环境进行分析具有重要意义，是我国国情发展的需求和城市规划相关研究的需求。通过本项竞赛遴选出快速的建筑物目标提取算法，实现空间信息网络对建筑物目标的全天时、全天候、多视角的在线检测与实时跟踪，同时将检测跟踪的解译结果经链路直接传回，可以大大降低对专家解译的依赖，提高 SAR 图像解译的自动化程度与在轨实时处理能力。',
    },
    {
      condition: '赛题三',
      validate: true,
      title: '光学遥感图像目标自动检测识别 ',
      url: require('./images/theme3.png'),
      operation: '查看详情',
      regist: '报名注册',
      description:
        '针对空间信息网络多维、多尺度空间信息链路传输与处理瓶' +
        '颈，通过本项竞赛遴选优秀的光学遥感图像目标自动检测识别算法模型，' +
        '对光学遥感图像中感兴趣的目标对象进行检测识别，并依据检测结果对' +
        '遥感图像进行基于目标内容的智能压缩，实现对目标区域无损压缩，对' +
        '非目标区域进行大幅压缩，从而保留数据中感兴趣区域的信息，同时去' +
        '除背景等冗余信息，提高空间信息网络链路传输的效率。',
    },
    {
      condition: '赛题四',
      validate: false,
      title: '遥感图像语义分割 ',
      url: require('./images/theme4.png'),
      operation: '查看详情',
      regist: '报名注册',
      description:
        '通过对遥感图像的语义分割，可方便快捷地获取土地利用/覆' +
        '盖信息，并作为精准农业、城市规划、环境保护、土地资源管理等应用' +
        '的数据支撑。目前针对遥感图像像素级分类的前沿算法已能达到很高的' +
        '精度，然而现有研究工作都局限于较小的地面区域和较为单一的遥感数' +
        '据，造成这些算法对于多源图像的适应能力极为有限。因此，通过本项' +
        '竞赛遴选出利用遥感数据向地学知识进行高效转化的算法模型，获取泛' +
        '化能力强大的遥感语义分割算法，进而对多源数据、广域区域进行快速' +
        '准确的土地利用/覆盖信息提取，从而提升空间信息网络建设中遥感图像' +
        '解译的自动化程度和实际应用能力。',
    },
    {
      condition: '赛题五',
      validate: false,
      title: '任务驱动的遥感图像智能压缩 ',
      url: require('./images/theme5.png'),
      operation: '查看详情',
      regist: '报名注册',
      description:
        '空间信息网络环境下传输带宽资源有限，传统的遥感数据压' +
        '缩效率难以满足星地和星间实时传输的应用需要。通过对遥感影像进行' +
        '高效的压缩，节省需要的存储空间及传输带宽，可实现海量遥感影像数' +
        '据的高效存储与分发。通过本项竞赛遴选出优秀的遥感图像智能压缩算' +
        '法，从而提升空间信息网络中遥感图像的传输效率，支撑空间网络信息' +
        '的实时分析与应用',
    },
    {
      condition: '赛题六',
      validate: false,
      title: '遥感卫星视频目标自动跟踪 ',
      url: require('./images/theme6.png'),
      operation: '查看详情',
      regist: '报名注册',
      description:
        '利用光学遥感卫星视频可以实现指定目标监控，在机场、商' +
        '场、道路流量监测等方面具有重要的应用价值，但是，卫星视频数据存' +
        '在目标尺寸相对较小、背景抖动、目标大范围旋转等问题，自动化跟踪' +
        '是实现应用的一个难点。针对空间信息网络多维、多尺度空间信息链路' +
        '传输与处理瓶颈，通过本项竞赛遴选优秀的光学遥感卫星视频目标自动' +
        '跟踪算法模型，实现空间信息网络对地物目标的在线实时跟踪，同时将' +
        '跟踪结果经链路直接传回，提高空间信息网络在轨实时处理能力和链路' +
        '传输效率。',
    },
  ];
};

const { Row, Col } = Grid;

export default class ApplicationProgress extends Component {
  static displayName = 'ApplicationProgress';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
  }

  render() {
    const data = dataSource();
    const { isMobile } = this.state;
    return (
      <div className="application-progress">
        <IceContainer>
          <Step current={0} shape={isMobile ? 'dot' : 'circle'}>
            <Step.Item title="报名注册号" />
            <Step.Item title="发布数据" />
            <Step.Item title="初赛" />
            <Step.Item title="决赛" />
            <Step.Item title="复审答辩" />
          </Step>
          <div>
            {data.map((item, index) => {
              return (
                <div style={styles.row} key={index}>
                  <Row wrap>
                    <Col xxs="24" s="4">
                      <div style={styles.imageWrap}>
                        <img
                          style={styles.image}
                          src={item.url}
                          alt="condition"
                        />
                        <br />
                        <span>{item.condition}</span>
                      </div>
                    </Col>
                    <Col
                      xxs="24"
                      s="16"
                      style={{
                        ...styles.itemBody,
                        ...(isMobile && styles.mobileContentCenter),
                      }}
                    >
                      <span
                        style={
                          styles.itemStatusSuccess
                        }
                      >
                        <Icon type="success" />
                        <span style={styles.itemStatusText}>
                          {item.title}
                        </span>
                      </span>
                      <div
                        style={{
                          ...styles.itemDescription,
                          ...(isMobile && styles.removeContentWidth),
                        }}
                      >
                        {item.description}
                      </div>
                    </Col>
                    <Col xxs="24" s="4">
                      <div style={styles.operationWrap}>
                        <a href={item.url} target="_blank">
                          {item.operation}
                        </a>
                        <a style={styles.operBtn} href={item.url} target="_blank">
                          {item.regist}
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  row: {
    backgroundColor: '#f9f9f9',
    marginTop: '32px',
    padding: '20px 40px',
  },
  imageWrap: {
    textAlign: 'center',
  },
  image: {
    width: '64px',
    height: '64px',
    borderRadius: '50',
    marginBottom: '12px',
  },
  itemBody: {
    padding: '10px 50px 0',
  },
  itemDescription: {
    color: '#666',
    marginTop: '20px',
  },
  operationWrap: {
    marginTop: '40px',
    textAlign: 'center',
  },
  itemFooter: {
    textAlign: 'center',
    color: '#666',
    marginTop: '40px',
  },
  nextBtn: {
    marginTop: '40px',
  },
  itemStatusSuccess: {
    color: '#1be25c',
  },
  itemStatusFail: {
    color: '#f33',
    fontSize: '16px',
  },
  itemStatusText: {
    marginLeft: '10px',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 'bold',
    color: 'rgb(51, 51, 51)',
  },
  mobileContentCenter: {
    textAlign: 'center',
    padding: '20px 0 0 0',
  },
  removeContentWidth: {
    maxWidth: 'none',
  },
  operBtn: {
    marginLeft: '10px',
  },
};
