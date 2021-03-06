import React from "react";
import './InfomStyle.css'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import globalConf from "../../../../../globalConfig";


export default class ThemeInfo5 extends React.Component {
  static displayName = 'ThemeInfo5';

  render(){

    return (
      <div className={'info-paragraph'} >
        <h1>
          {globalConf.themeConf[4].bannerTitle+globalConf.themeConf[4].title}
        </h1>
        <h2>
          （1）&nbsp;&nbsp; 竞赛说明
        </h2>

        <p>
          光学遥感视频卫星目标自动跟踪竞赛即利用算法模型对一段光学遥感卫星视频中的一个目标的位置进行自动化识别与判定，并以矩形边界框的形式进行标识。本项竞赛以包含典型运动目标的光学遥感卫星视频为处理对象，视频以时间上连续的多帧图像的方式提供，参赛队伍使用主办方提供的光学遥感卫星视频进行运动目标自动跟踪处理，主办方依据评分标准对自动跟踪结果进行综合评价。
        </p>
        <h2>
          （2）&nbsp;&nbsp; 竞赛数据
        </h2>
        <p>
          竞赛中将提供多段高分辨率光学卫星遥感视频，以及对应的目标自动跟踪标注数据集。如图1所示，展示了本项竞赛遥感卫星视频数据目标样本。
        </p>
        <div className={'info-paragraph-text-center'}>
          <img
            className="info-paragraph-img"
            src={require('./imgs/t5_1.png')}
            alt=""
          />
          <p id='figure-name'>
            图1 {globalConf.themeConf[4].title}样本示例
          </p>
        </div>


        <h2>
          （3）	处理/提交结果
        </h2>
        <p>
          ◼&nbsp; 参赛者需在测试集每段视频上对指定的目标进行跟踪，给出后续视频帧中跟踪到的目标边界矩形框的左上角坐标及其宽高。
        </p>
        <p>
          ◼&nbsp; 结果输出：txt格式，每一段卫星视频检测结果均需建立一个以视频文件名命名的文本文件。文件的每一行代表检测视频对应每帧追踪结果的目标边界矩形框左上角坐标及其宽高；最终结果以zip压缩文件格式提交。
        </p>
        <p>
            目标边界矩形框的左上角x坐标、左上角y坐标、宽度、高度以","隔开，格式示例 (提交范例：tracking.zip<a href={globalConf.themeConf[4].zipUrl()}>【点击下载】</a>) 如下：
        </p>
        <table>
          <thead>
          <tr><th colSpan="3"></th></tr>
          <tr>
            <th style={styles.textCenter} width="325px"></th>
          </tr>
          </thead>
        
          <tbody>
          <tr> <td style={styles.textCenter}>x<sub>min</sub>,y<sub>min</sub>,box-width,box-hight</td> </tr>
          <tr> <td style={styles.textCenter}> x<sub>min</sub>,y<sub>min</sub>,box-width,box-height</td> </tr>
          <tr> <td style={styles.textCenter}> ...</td></tr>
          <tr> <td style={styles.textCenter}> x<sub>min</sub>,y<sub>min</sub>,box-width,box-height</td> </tr>
          </tbody>
          
          {/*
          <tbody>
          <tr> <td style={styles.textLeft}>1    </td><td style={styles.textLeft}>飞机    </td><td style={styles.textLeft}>0.99    x<sub>min</sub>    y<sub>min</sub>    x<sub>max</sub>    y<sub>max</sub></td>  </tr>
          <tr> <td style={styles.textCenter}>2 </td><td style={styles.textCenter}>     飞机 </td><td style={styles.textCenter}>      0.95    x<sub>min</sub>    y<sub>min</sub>    x<sub>max</sub>    y<sub>max</sub></td>  </tr>
          <tr> <td style={styles.textCenter}>...</td></tr>
          <tr> <td style={styles.textCenter}>n      舰船       0.90    x<sub>min</sub>    y<sub>min</sub>    x<sub>max</sub>    y<sub>max</sub></td>  </tr>
          </tbody>
          */}

        </table>

        <p>
          ◼&nbsp; 提交方式：初赛和决赛阶段均需在竞赛官网在线提交竞赛对应测试数据集的动态目标跟踪输出结果；决赛阶段需同时提交遥感图像卫星视频目标跟踪算法模型、算法模型介绍、源代码及运行测试说明等相关文档。
        </p>

        <h2>
          （4） 评分规则
        </h2>
        <p>
          遥感卫星视频目标跟踪算法评价主要采用从跟踪质量和跟踪速度两方面来进行评价，主要涉及指标如下：
        </p>
        <p className='textIndent'>
          ① 重叠率，跟踪器从第一帧开始，连续不断地对一段视频序列进行跟踪，直到最后一帧，每一帧产生一个矩形框记录当前帧的跟踪结果<InlineMath math={'r_a'}/>，而真实的跟踪结果也由一个矩形框<InlineMath math={'r_t'}/>。重叠率定义为：
        </p>
        <p>
          <BlockMath math={'S=\\frac{|r_a \\bigcap r_t|}{|r_a \\bigcup r_t|}'}/>
        </p>
        <p className='textIndent'>
          {/*
          其中，<InlineMath math={'\\bigcap'}/>和<InlineMath math={'\\bigcup'}/>分别代表预测区域和实际区域的交集和并集，
          绝对值符号代表区域内的像素总数。定义重叠率<InlineMath math={'S'}/>大于某一阈值<InlineMath math={'t'}/>的帧为成功帧，统计阈值在<InlineMath math={'0-1'}/>之间变化时成功帧数占总帧数的比例并画出曲线图，
          以曲线下面积<InlineMath math={'AUC(AREA \\quad UNDER \\quad CURVE)'}/>作为本次竞赛中对跟踪器性能的评价。<InlineMath math={'AUC'}/>越高，自动跟踪效果越好。
          */}

          其中，&cap;和&cup;分别代表预测区域和实际区域的交集和并集，
          绝对值符号代表区域内的像素总数。定义重叠 S 大于某一阈值 t 的帧为成功帧，统计阈值在 0-1 之间变化时成功帧数占总帧数的比例并画出曲线图，
          以曲线下面积 AUC (Area Under Cure) 作为本次竞赛中对跟踪器性能的评价。AUC越高，自动跟踪效果越好。
        </p>
        <p className='textIndent'>
          ② 中心误差成功率，中心误差是指算法预测得到的结果中心与真实的目标位置中心的欧式距离 (像素距离)，中心误差成功率是指中心误差小于5的帧数在总帧数中的比例。中心误差成功率越高，自动跟踪效果越好。
        </p>
        <p className='textIndent'>
          ③ 每秒跟踪帧数，在一秒钟之内跟踪器完成跟踪的帧数。本次竞赛以所有视频段的平均每秒跟踪帧数作为指标，衡量跟踪器的效率。每秒跟踪帧数越高，自动跟踪效果越好。
        </p>
        <p>
          比赛初赛成绩由大赛评委会专家根据AUC得分进行排名，AUC值越高，遥感卫星视频目标跟踪算法结果越准确，排名越靠前。比赛决赛成绩将基于算法模型精度、效率等指标加权，对算法模型性能进行综合评估与排名。
        </p>

        <p>
          <br/>
        </p>
      </div>
    );
  };
}

const styles = {
  sOverview: {
    marginTop: '20px',
  },
  textCenter: {
    textAlign: 'center',
    whiteSpace:'pre',
    fontSize: '14px',
    fontFamily: 'Times New Roman',
  },
  textRight: {
    textAlign: 'right',
    whiteSpace:'pre',
  },
  textLeft: {
    textAlign: 'left',
    whiteSpace:'pre',
  },
}
