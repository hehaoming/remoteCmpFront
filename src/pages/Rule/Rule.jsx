import React, {Component} from 'react';
import IntroBanner from '../ThemeHome/components/IntroBanner';
import BlackFooter from '../ThemeHome/components/BlackFooter';
import BasicTab from "../ThemeHome/components/BasicTab";
import Overview from "../ThemeHome/components/Overview";
import {Col, Row} from "@alifd/next/lib/grid";
import globalConf from "../../globalConfig";
import { InlineMath, BlockMath } from 'react-katex';
import {Link} from "react-router-dom";

require('../common/textHtml.css');

const introBannerProp = {
  themeId: 2,
  cmpInfoConf: {},
  dataDownloadConf: {
    dataUrl: 'http://pan.baidu.com',
    fetchCode: '888-666',
  },
  commitResConf: {},
  hotRankConf: {},
};

export default class Rule extends Component {
  static displayName = 'Rule';

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderText = () => {
    return (
      <div className="contentEditorHtmlOutput" data-spm-anchor-id="5176.12281976.0.i1.34164c2ajQFYls">
        <h2>赛事简介</h2>
        <p>本次竞赛将遵循“开放、公平、创新、引领”的原则，面向全国乃至全球相关领域研究团队，
          以推动空间信息技术领域进步、培养锻炼专业人才和研究团队为目标，
          并为重大研究计划在轨集成验证征集优秀算法。</p>
        <p>
          本次大赛设置遥感图像场景分类、遥感图像目标检测、
          遥感图像语义分割、遥感图像变化检测和遥感卫星视频目标跟踪五个竞赛单元，并在决赛中设置基于华为昇腾AI处理器的遥感图像解译加分赛。
          组织方将提供面向各竞赛单元的大规模遥感图像精确标注数据集与标准规范的测试数据，
          制定可量化的算法评测标准，通过初赛、决赛和复审答辩等多个阶段的评比，
          遴选出优秀的遥感图像解译算法，决胜出优胜团队。本次大赛设置四类奖项 (特等奖、一等奖、二等奖及三等奖)，
          获奖队伍将受邀参加国家自然科学基金“空间信息网络”重大研究计划指导专家组于
          2019年9月19日在浙江乌镇举办的第四届“空间信息网络”论坛颁奖仪式和学术交流活动。
        </p>

        <br/>
        <h2>主题设置</h2>
        <ol>
          <li>
            <p><strong><Link
              to={globalConf.themeConf[0].url}>{globalConf.themeConf[0].bannerTitle}{globalConf.themeConf[0].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong>
            </p>
            <p>
              {globalConf.themeConf[0].descriptionRule}
            </p>
          </li>

          <li>
            <p><strong><Link
              to={globalConf.themeConf[1].url}>{globalConf.themeConf[1].bannerTitle}{globalConf.themeConf[1].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong>
            </p>
            <p>
              {globalConf.themeConf[1].descriptionRule}
            </p>
          </li>
          <li>
            <p><strong><Link to={globalConf.themeConf[2].url}>{globalConf.themeConf[2].bannerTitle}
              {globalConf.themeConf[2].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong></p>
            <p>
              {globalConf.themeConf[2].descriptionRule}
            </p>
          </li>
          <li>
            <p><strong><Link to={globalConf.themeConf[3].url}>{globalConf.themeConf[3].bannerTitle}
              {globalConf.themeConf[3].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong></p>
            <p>
              {globalConf.themeConf[3].descriptionRule}
            </p>
          </li>
          <li>
            <p><strong><Link to={globalConf.themeConf[4].url}>{globalConf.themeConf[4].bannerTitle}
              {globalConf.themeConf[4].title}  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong></p>
            <p>
              {globalConf.themeConf[4].descriptionRule}
            </p>
          </li>
          <li>
            <p><strong><Link to={'/theme/6'}>决赛加分赛：基于华为昇腾AI处理器的遥感图像解译  &nbsp; &nbsp; &nbsp;&nbsp;  (查看详情)</Link></strong></p>
            <p>
              空间信息网络数据量大，信息丰富，基于地面处理系统的遥感图像解译受到空间信息网络传输能力限制，解译效率低、成本高。利用智能处理器进行嵌入式开发，实现遥感图像内容的在轨智能解译，可以大幅降低空间信息网络信息传输压力，同时大幅提升空间信息网络中遥感图像在轨实时信息提取与分析应用能力。
            </p>
          </li>
        </ol>

        <br/>
        <h2>时间安排</h2>

        <table>
          <thead>
          <tr>
            <th style={styles.textCenter} width="20%">环节</th>
            <th style={styles.textCenter} width="30%">时间</th>
            <th style={styles.textCenter} width="50%">备注</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td style={styles.textCenter}>线上报名</td>
            <td style={styles.textCenter}>6月1日至8月10日</td>
            <td>大赛组委会发布竞赛通知，各参赛团队自愿注册报名参赛。
              鼓励小微企业、创业团队、高校研究所等组队参赛，按自愿报名的原则，在线填写报名信息。
            </td>
          </tr>
          {/* <tr>
            <td style={styles.textCenter}>发布邀请</td>
            <td style={styles.textCenter}>6月15日至6月30日</td>
            <td>邀请国内外未进行线上报名的相关高校、企业、研究团体等参与竞赛，并发布竞赛邀请。</td>
          </tr> */}
          <tr>
            <td style={styles.textCenter}>发布数据</td>
            <td style={styles.textCenter}>6月15日</td>
            <td>公布竞赛中各赛题数据集。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>初赛阶段</td>
            <td style={styles.textCenter}>7月1日至8月10日</td>
            <td>根据报名情况组织竞赛初赛，对参赛队伍提交的算法模型结果开展测试、评估、审查和遴选工作。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>决赛阶段</td>
            <td style={styles.textCenter}>8月16日至8月31日</td>
            <td>根据初赛成绩遴选优秀队伍参加现场决赛，开展算法演示验证，算法评估工作。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>复审答辩</td>
            <td style={styles.textCenter}>9月6日至9月15日</td>
            <td>遴选决赛成绩优秀的队伍参加竞赛答辩，专家评委对参赛团队算法成绩和答辩成绩进行综合评定和排名。</td>
          </tr>
          <tr>
            <td style={styles.textCenter}>颁奖活动</td>
            <td style={styles.textCenter}>9月19日至9月20日</td>
            <td>组委会公布获奖队伍名单和成绩，邀请获奖团队参加第四届“空间信息网络”学术论坛颁奖典礼。</td>
          </tr>
          </tbody>
        </table>

        <br/>
        <h2>竞赛机制</h2>

        <p><strong>（1）竞赛初赛</strong></p>
        <p>
          参赛队员注册报名成功后，通过竞赛云平台下载数据，在本地进行算法设计与模型调试，通过在线方式提交算法模型与竞赛任务结果。开放评测后，每支参赛团队每天最多可提交1次解译结果，平台经计算后，参赛团队可在竞赛官网查看成绩及评分排行榜；排行榜将选择参赛队伍在本阶段的历史最优成绩进行排名展示。
        </p>

        <p><strong>（2）竞赛决赛</strong></p>
        <p>
          {/* 决赛阶段将遴选初赛中各赛题成绩排名前20的参赛队伍 (具体数量由竞赛组委会视参赛情况确定)，经审核合格后参加决赛，包括现场算法模型测试和加分赛两个环节。 */}
          决赛时间：2019年8月26日-2019年8月31日。遥感图像场景分类、遥感图像目标检测、遥感图像语义分割、遥感图像变化检测和遥感视频目标跟踪赛题决赛将分别于8月26日、8月28日、8月29日、8月30日和8月31举行。
          各赛题决赛当天8:00开始审核团队信息，同步开展决赛现场模型测试；18:00结束当天比赛。
        </p>
        <p>
          决赛地点：北京市海淀区杏石口路65号益园园区A1五层航天宏图信息技术股份有限公司，多功能厅。
        </p>
        <p>
          决赛队伍遴选：本次大赛根据参赛队伍初赛成绩，遴选各赛题中排名前10的队伍（不包含武汉大学团队），进入决赛阶段。为保证大赛公平、公正，各赛题初赛中排名前10的武汉大学团队可参与决赛成绩评测，但不参与竞赛奖项的评选。
        </p>
        <p>
          决赛实施：决赛阶段采用现场竞赛的方式，要求进入决赛的参赛队伍到竞赛组织方指定的决赛地点（航天宏图信息技术股份有限公司）进行现场模型测试和加分赛测试，竞赛组织方将为每支决赛队伍分配一套华为云GPU服务器用于决赛现场模型测试。
          竞赛决赛包括现场模型测试和加分赛两个环节，决赛队伍须在决赛当天（8:00-18:00）完成现场模型测试和加分赛任务。<br/>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现场模型测试环节中，要求各参赛队伍携带笔记本电脑，利用竞赛组织方提供的华为云服务器进行算法模型环境搭建，基于相应的决赛测试数据现场测试模型，考察模型的精度指标。现场模型测试中组织方将为每个参赛队伍提供一套云服务器设备，参赛团队可通过云服务器IP地址链接使用。<br/>
    
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;决赛加分赛环节中，由竞赛组织方提供华为Atlas 200 DK AI开发者套件，参赛队伍须将决赛算法模型移植于华为Atlas 200 DK AI开发者套件平台，基于决赛测试数据集实现模型的推理计算，同时考核模型的精度指标和效率指标。
          决赛加分赛及Atlas 200 DK AI开发者套件相关信息可参考竞赛官网“决赛加分赛”菜单页面介绍。决赛期间将安排华为Atlas人工智能技术专家进行现场技术指导，为参赛队伍模型移植提供技术咨询和技术支持服务。
        </p>
        <p className='textIndent'>
          决赛模型评价与排名机制：决赛阶段主要对现场模型测试环节的精度指标、加分赛环节的模型精度指标和模型效率指标进行考核，模型精度和模型效率均按照归一化分数进行统计并作为决赛成绩排名依据，其中现场模型测试环节的精度成绩占90%，加分赛环节的模型精度成绩和模型效率成绩各占5%。
          各赛题模型精度指标采用与初赛相同的评价机制，模型效率指标评价方式如下：<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模型效率指标即参赛队伍在加分赛阶段，基于赛题给定的测试数据集进行算法模型测试所花费的总时间，并归一化至百分制得分。该指标从模型运行时开始计时，至模型运行结束时停止计时，假设所花费的总时间为<InlineMath math={'t'}/>。模型效率以6小时为基础归一化为百分制，<InlineMath math={'t=0'}/>时得分为100分，<InlineMath math={'t>=6'}/>时得分为0分，<InlineMath math={'0<t<6'}/>时，得分为<InlineMath math={'s=-50t/3+100'}/>。

          <p>
            决赛云服务器配置：<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统镜像：Ubuntu 16.04 64bit/ CentOS 7.3 64 bit <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CPU：8核心高性能CPU <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内存：32GB <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;显卡：NVIDIA Tesla P4显卡(8GB显存) <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CUDA驱动：默认配置CUDA9.0，驱动版本 384.81 <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统盘：100GB <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存储盘：100GB <br/>
          </p>


          {/* 决赛阶段最终成绩由大赛评委会专家根据参赛队伍现场算法模型测试成绩和加分赛成绩进行加权综合评价，作为决赛阶段最终成绩。竞赛组织方将对模型现场解译和处理结果进行审查，并基于算法效率、模型精度等指标加权，对算法模型性能进行综合评估与排名，具体评价方式将在决赛阶段公布。 */}
        </p>
        <p><strong>（3）复审答辩</strong></p>
        <p>
          {/* 决赛阶段将遴选初赛中各赛题成绩排名前20的参赛队伍 (具体数量由竞赛组委会视参赛情况确定)，经审核合格后参加决赛，包括现场算法模型测试和加分赛两个环节。 */}
          答辩时间：答辩于2019年9月18日上午9:00开始，遥感图像场景分类、遥感图像目标检测、遥感图像语义分割、遥感图像变化检测和遥感视频目标跟踪赛题在同一天完成复审答辩。
        </p>
        <p>
          答辩地点：浙江省嘉兴市桐乡市乌镇西栅景区通安客栈普济厅。
        </p>
        <p>
          答辩队伍遴选：本次大赛根据参赛队伍决赛成绩，遴选各赛题中排名前6的队伍（不包含武汉大学团队），进入复审答辩阶段。为保证大赛公平、公正，各赛题决赛中排名前6的武汉大学团队不参与复审答辩和竞赛奖项的评选。
        </p>
        <p>
          答辩形式：复审答辩将以现场答辩的方式进行。遥感图像场景分类、遥感图像目标检测、遥感图像语义分割、遥感图像变化检测和遥感视频目标跟踪赛题各赛题进入复审答辩环节的团队，按照决赛排名顺序依次进行答辩。
        </p>
        <p>
          材料提交：晋级复审答辩的团队需提前准备答辩材料，包括答辩PPT、算法说明文档和有效身份证件信息等。
        </p>
        <p>
          答辩规则：① 每支参赛队伍面对评委有5分钟陈述时间和5分钟问答时间；② 评委根据参赛选手的技术思路、理论深度和现场表现等进行综合评分；③ 复审答辩成绩根据参赛队伍的算法成绩和答辩成绩进行综合评估得出，并依据复审答辩结果拟定各参赛队伍获奖等级。
        </p>
        <p>
          竞赛颁奖：依据复审答辩评选出的大赛奖项，邀请获奖队伍参加在第四届“空间信息网络”学术论坛举办的颁奖典礼。
        </p>

        <br/>

        <h2> 奖项设置 </h2>
        <p>竞赛将根据测试得分情况，对参赛队伍进行排名，
          拟设立特等奖、一等奖、二等奖和三等奖 (根据竞赛情况，部分奖项可能空缺)，奖励金额如下：</p>
        <p>
          <strong> &nbsp; &nbsp;特等奖   &nbsp; &nbsp; &nbsp; &nbsp;奖金100000元人民币<br/></strong>
          <strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;一等奖   &nbsp; &nbsp; &nbsp; &nbsp;奖金30000元人民币<br/></strong>
          <strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;二等奖   &nbsp; &nbsp; &nbsp; &nbsp;奖金20000元人民币<br/></strong>
          <strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;三等奖   &nbsp; &nbsp; &nbsp; &nbsp;奖金10000元人民币<br/></strong>
        </p>
        <br/>

        <h2>报名须知</h2>

        <ol>
          <li>
            <strong>报名方式</strong>

            {/* <p>大赛采用在线注册的方式进行报名参赛。参赛队伍可登陆“遥感图像稀疏表征与智能分析竞赛”官方网站（http:// rssrai2019.cn）进行注册与报名，提交报名信息后2个工作日内收到主办方回复邮件即为报名成功。</p> */}
            <p>大赛采用在线注册的方式进行报名。参赛队伍可登陆“遥感图像稀疏表征与智能分析竞赛”官方网站（http://rscup.bjxintong.com.cn）进行注册与报名，提交报名信息后可登陆竞赛官网即为报名成功。</p>

          </li>

          <li>
            <strong>联系方式</strong>

            <p>
              官方网站：http://rscup.bjxintong.com.cn
            </p>
            <p>
              竞赛论坛：http://sin.xintongconference.com
            </p>

            <p>通讯邮箱：rscup2019@hotmail.com
            </p>

            <p>
              大赛交流QQ群：660-926-708
            </p>

            <p style={styles.whiteSpaceKeeper}>联  系  人：龙  洋（189-0862-7409）   董志鹏 （189-6396-5044）
            </p>

          </li>

        </ol>

        <br/>
        <h2>注意事项</h2>

        <p><strong>报名与组队要求</strong></p>
        <ol>
          <li>
            每个参赛团队组成人数不得超过5人；
          </li>
          <li>
            团队名称不得包含不文明字词，不可侵犯任何第三方的知识产权、隐私权、宣传权，或其他适用的法律法规；
          </li>
          <li>
            每个参赛团队需有一名队长，负责与竞赛主办方沟通；
          </li>
          <li>
            一个竞赛主题同一课题组最多只能一支队伍参加，且一个人限报一个竞赛主题；
          </li>
          <li>
            网上报名采用实名审核，审核通过的实名信息将无法修改，如真实参赛人员与报名信息不符，组委会有权取消相关团队和人员的参赛资格。
          </li>
        </ol>
        <p><strong>竞赛结果提交要求</strong></p>
        <ol>
          <li>
            参赛团队将提交算法软件代码及可执行程序，代码需要在竞赛主办方提供的竞赛服务器上编译执行，竞赛主办方将严格保护参赛者的知识产权；
          </li>
          <li>
            参赛团队的算法软件不得违反国家相关法律法规，不得侵犯他人知识产权，若违反上述规定引起知识产权异议和纠纷，其责任由参赛者承担；
          </li>
          <li>
            各参赛团队参加本次竞赛所提交的所有软件及相关成果，组委会有权用于后期大赛相关展示、宣传工作；
          </li>
          <li>
            各参赛团队从竞赛组委会获取的样本数据仅限于在本团队内部使用，不得出售或租赁、不得泄露或外传，不得使用到与本次竞赛无关的项目中。
          </li>
        </ol>
      </div>
    );
  };

  render() {
    return (
      <Row gutter="20" wrap>
        <Col l="24" xxs="24">
          <header id="rules-header" className="text-center">
            <div className="cn-header white">比 赛 细 则</div>
            <div className="en-header white">Competition Rules</div>
          </header>
        </Col>
        <Col l="24" xxs="24">
          <div className='whiteText'>
            {this.renderText()}
          </div>
        </Col>
      </Row>

    );
  }
}

const styles = {
  sOverview: {
    marginTop: '20px',
  },
  textCenter: {
    textAlign: 'center',
  },
  whiteSpaceKeeper:{
    whiteSpace:'pre',
  },
}
