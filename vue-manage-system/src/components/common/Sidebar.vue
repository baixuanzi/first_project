<!--
@author: pengjia
@date: 2020/12/14
@description:
-->
<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
             background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff"
             unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{subItem.title}}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{threeItem.title}}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                {{subItem.title}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import bus from "./bus";
  export default {
    name: "Sidebar",
    data() {
      return {
        collapse : false,
        items : [
          {
            icon: 'el-icon-s-home',
            index: 'dashboard',
            title: '系统首页'
          },
          {
            icon: 'el-icon-s-order',
            index: '4',
            title: '流程管理',
            subs: [
              {
                index: 'xinjianliucheng',
                title: '新建流程'
              },
              {
                index: '4-2',
                title: '常用流程',
                subs: [
                  {
                    index: 'editor',
                    title: '富文本编辑器'
                  },
                  {
                    index: 'markdown',
                    title: 'markdown编辑器'
                  }
                ]
              },
              {
                index: 'daiban',
                title: '待办事宜'
              }
            ]
          },
          {
            icon: 'el-icon-s-order',
            index: '5',
            title: '合同管理',
            subs: [
              {
                index: 'shouye',
                title: '合同首页'
              },
              {
                index: 'qicao',
                title: '合同起草'
              },
              {
                index: 'shenhe',
                title: '合同审批'
              },
              {
                index: '5-2',
                title: '合同执行',
                subs: [
                  {
                    index: 'wodehetong',
                    title: '我的合同'
                  },
                  {
                    index: 'fukuan',
                    title: '付款管理'
                  },
                  {
                    index: 'shoukuan',
                    title: '收款管理'
                  }
                ]
              },
              {
                index: 'biangeng',
                title: '合同变更'
              },
              {
                index: 'hetongbaobiao',
                title: '合同报表'
              }
            ]
          },
          {
            icon: 'el-icon-s-order',
            index: '6',
            title: '人事关系',
            subs: [
              {
                index: 'ruzhi',
                title: '员工入职'
              },
              {
                index: 'hetongqianshu',
                title: '劳动合同签署',
              },
              {
                index: 'zhuanzheng',
                title: '员工转正'
              },
              {
                index: 'diaogang',
                title: '员工调岗'
              },
              {
                index: 'lizhi',
                title: '员工离职'
              },
              {
                index: 'xuqian',
                title: '续签合同'
              }
            ]
          },
          {
            icon: 'el-icon-s-order',
            index: '7',
            title: '人事档案',
            subs: [
              {
                index: 'wodekapian',
                title: '我的卡片'
              },
              {
                index: 'wodexiashu',
                title: '我的下属',
              }
            ]
          },
          {
            icon: 'el-icon-s-order',
            index: '8',
            title: '会议管理',
            subs: [
              {
                index: 'huiyirili',
                title: '会议日历'
              },
              {
                index: 'huiyitianjia',
                title: '会议添加',
              },
              {
                index: '查询会议',
                title: '查询会议'
              },
              {
                index: 'huiyirenwu',
                title: '会议任务'
              }
            ]
          },
          {
            icon: 'el-icon-s-order',
            index: '9',
            title: '资产管理',
            subs: [
              {
                index: 'wodezichan',
                title: '我的资产'
              },
              {
                index: 'chaxunzichan',
                title: '查询资产',
              },
              {
                index: 'rukushenqing',
                title: '入库申请'
              },
              {
                index: 'zichanjieyong',
                title: '资产借用'
              },
              {
                index: 'zichanguihuan',
                title: '资产归还'
              }
            ]
          },
          {
            icon: 'el-icon-s-order',
            index: '10',
            title: '项目管理',
            subs: [
              {
                index: 'xinjianxiangmu',
                title: '新建项目'
              },
              {
                index: 'xiangmuzhixing',
                title: '项目执行',
              },
              {
                index: 'chaxunxiangmu',
                title: '查询项目'
              },
              {
                index: 'renwuzhixing',
                title: '任务执行'
              },
              {
                index: 'shenpirenwu',
                title: '审批任务'
              },
              {
                index: 'chaxunrenwu',
                title: '查询任务'
              },
              {
                index: 'xiangmuyanshou',
                title: '项目验收'
              }
            ]
          },


          /*{
            icon: 'el-icon-phone',
            index: 'table',
            title: '基础表格'
          },
          {
            icon: 'el-icon-s-help',
            index: 'tabs',
            title: 'tab选项卡'
          },
          {
            icon: 'el-icon-s-order',
            index: '3',
            title: '表单相关',
            subs: [
              {
                index: 'form',
                title: '基本表单'
              },
              {
                index: '3-2',
                title: '三级菜单',
                subs: [
                  {
                    index: 'editor',
                    title: '富文本编辑器'
                  },
                  {
                    index: 'markdown',
                    title: 'markdown编辑器'
                  }
                ]
              },
              {
                index: 'upload',
                title: '文件上传'
              }
            ]
          },*/
          /*{
            icon: 'el-icon-s-platform',
            index: 'icon',
            title: '自定义图标'
          },
          {
            icon: 'el-icon-pie-chart',
            index: 'charts',
            title: 'schart图表'
          },
          {
            icon: 'el-icon-rank',
            index: '6',
            title: '拖拽组件',
            subs: [
              {
                index: 'drag',
                title: '拖拽列表'
              },
              {
                index: 'dialog',
                title: '拖拽弹框'
              }
            ]
          },
          {
            icon: 'el-icon-s-promotion',
            index: 'i18n',
            title: '国际化功能'
          },
          {
            icon: 'el-icon-s-data',
            index: '7',
            title: '错误处理',
            subs: [
              {
                index: 'permission',
                title: '权限测试'
              },
              {
                index: '404',
                title: '404页面'
              }
            ]
          },
          {
            icon: 'el-icon-mobile',
            index: '/donate',
            title: '支持作者'
          }*/
        ]
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/','')
      }
    },
    created() {
      //通过Event Bus进行组件通信，来折叠侧边栏
      bus.$on('collapse',msg => {
        this.collapse = msg;
        bus.$emit('collapse-content',msg)
      })
    }
  }
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }
  .sidebar::-webkit-scrollbar {
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
  .sidebar > ul {
    height: 100%;
  }
</style>
