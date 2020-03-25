/**
 * author Liu Yin
 * date 2020/3/25
 * Description:
 */
export default {
  data() {
    return {
      choiceList: [
        {
          id: 1,
          question: '您之前了解过鲲鹏相关的技术和应用场景吗？',
          answerList: [
            {
              name: 'A',
              value: 'A、很熟悉'
            },
            {
              name: 'B',
              value: 'B、了解部分'
            },
            {
              name: 'C',
              value: 'C、一点都不了解'
            },
            {
              name: 'D',
              value: 'D、听说过，没有具体了解'
            }
          ],
          answer: ''
        },
        {
          id: 2,
          question: '您期望通过什么方式了解和学习鲲鹏计算相关知识',
          answerList: [
            {
              name: 'A',
              value: 'A、政府或者行业协会举办的研讨会/论坛/峰会/'
            },
            {
              name: 'B',
              value: 'B、专题师资培训'
            },
            {
              name: 'C',
              value: 'C、相关认证考试'
            },
            {
              name: 'D',
              value: 'D、网络开放资源自学'
            },
            {
              name: 'E',
              value: 'E、不想了解'
            }
          ],
          answer: ''
        },
        {
          id: 3,
          question: '您认为鲲鹏计算相关技术对高校学生有哪些帮助？',
          answerList: [
            {
              name: 'A',
              value: 'A、对就业有帮助'
            },
            {
              name: 'B',
              value: 'B、对继续深造有帮助'
            },
            {
              name: 'C',
              value: 'C、没有具体的帮助'
            },
            {
              name: 'D',
              value: 'D、不确定有什么帮助'
            }
          ],
          answer: ''
        },
        {
          id: 4,
          question: '您认为贵校（学院）的课程体系中是否需要植入鲲鹏计算相关课程和资源',
          answerList: [
            {
              name: 'A',
              value: 'A、非常需要'
            },
            {
              name: 'B',
              value: 'B、需要'
            },
            {
              name: 'C',
              value: 'C、需要、但不紧急'
            },
            {
              name: 'D',
              value: 'D、不需要'
            }
          ],
          answer: ''
        },
        {
          id: 5,
          type: 'checkBox',
          question: '您认为鲲鹏计算在贵校（学院）的人才培养的哪些环节植入比较合适？',
          answerList: [
            {
              name: 'A',
              value: 'A、新开设必修课'
            },
            {
              name: 'B',
              value: 'B、替换部分必修课'
            },
            {
              name: 'C',
              value: 'C、选修课'
            },
            {
              name: 'D',
              value: 'D、实验课'
            },
            {
              name: 'E',
              value: 'E、实训课'
            },
            {
              name: 'F',
              value: 'F、不需要植入'
            }
          ],
          answer: []
        },
        {
          id: 6,
          question: '您认为贵校（学院）的基础信息建设是否有必要进行云迁移或云部署？',
          answerList: [
            {
              name: 'A',
              value: 'A、已经完成了云部署'
            },
            {
              name: 'B',
              value: 'B、有必要，还没有完成'
            },
            {
              name: 'C',
              value: 'C、没有具体的帮助'
            },
            {
              name: 'D',
              value: 'D、不确定有什么帮助'
            }
          ],
          answer: ''
        },
        {
          id: 7,
          question: '您认为贵校（学院）的专业建设是否需要云资源？',
          answerList: [
            {
              name: 'A',
              value: 'A、需要，并已经有充足资源'
            },
            {
              name: 'B',
              value: 'B、需要，还不完善'
            },
            {
              name: 'C',
              value: 'C、不确定'
            },
            {
              name: 'D',
              value: 'D、不需要'
            }
          ],
          answer: ''
        },
        {
          id: 8,
          question: '贵校（学院）是否有研究或者学习鲲鹏计算相关技术和课程体系的老师？',
          answerList: [
            {
              name: 'A',
              value: 'A、有，很多'
            },
            {
              name: 'B',
              value: 'B、有、极少'
            },
            {
              name: 'C',
              value: 'C、没有'
            },
            {
              name: 'D',
              value: 'D、不知道'
            }
          ],
          answer: ''
        },
        {
          id: 9,
          question: '通过与华为以及生态合作伙伴合作希望获得哪些方面的帮助？',
          type: 'checkBox',
          answerList: [
            {
              name: 'A',
              value: 'A、共同制定人才培养体系'
            },
            {
              name: 'B',
              value: 'B、共同研发教学资源'
            },
            {
              name: 'C',
              value: 'C、搭建基于鲲鹏的实验平台'
            },
            {
              name: 'D',
              value: 'D、共同进行鲲鹏人才培养'
            },
            {
              name: 'E',
              value: 'E、开展师资培训'
            },
            {
              name: 'F',
              value: 'F、开展科研工作'
            },
            {
              name: 'G',
              value: 'G、共同申报奖项'
            },
            {
              name: 'H',
              value: 'H、其他'
            }
          ],
          answer: []
        },
        {
          id: 10,
          question: '您认为贵校（学院）是否需要鲲鹏计算方面的师资培训？',
          answerList: [
            {
              name: 'A',
              value: 'A、非常需要'
            },
            {
              name: 'B',
              value: 'B、需要'
            },
            {
              name: 'C',
              value: 'C、目前不涉及这个领域，不需要'
            },
            {
              name: 'D',
              value: 'D、不确定'
            }
          ],
          answer: ''
        },
        {
          id: 11,
          question: '您是否有兴趣致力于鲲鹏计算领域的科研或课题研究？',
          answerList: [
            {
              name: 'A',
              value: 'A、有，乐于参与'
            },
            {
              name: 'B',
              value: 'B、有，视时间而安排'
            },
            {
              name: 'C',
              value: 'C、没有'
            },
            {
              name: 'D',
              value: 'D、不确定'
            }
          ],
          answer: ''
        },
        {
          id: 12,
          question: '贵校（学院）是否与华为或者其他ICT企业进行校企合作？',
          answerList: [
            {
              name: 'A',
              value: 'A、有'
            },
            {
              name: 'B',
              value: 'B、没有'
            },
            {
              name: 'C',
              value: 'C、不知道'
            }
          ],
          answer: ''
        },
        {
          id: 13,
          question: '您认为鲲鹏计算相关的活动举办的频率比较合适，包括不限于论坛、沙龙、专题培训',
          answerList: [
            {
              name: 'A',
              value: 'A、一个月一次'
            },
            {
              name: 'B',
              value: 'B、两个月一次'
            },
            {
              name: 'C',
              value: 'C、一个季度一次'
            },
            {
              name: 'D',
              value: 'D、半年一次'
            }
          ],
          answer: ''
        }
      ]
    }
  }
}
