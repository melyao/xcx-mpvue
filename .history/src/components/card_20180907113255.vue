<template>
  <div class="card">
    <div class="head">
      <img src="https://avatars1.githubusercontent.com/u/11460601?v=4&s=120" class="headImg"/>
      <span>yllziv</span>
    </div>
    <div class="content">
      <div class="title">「杭州 - 九月」Node Party 线下技术分享</div>
      <div class="article">
        <div class="markdown-text">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      content: '<h2>活动说明</h2>↵<h3>本次活动由蚂蚁金服-国际事业群-前端团队承办。</h3>↵<blockquote>↵<ul>↵<li>时间：2018 年 9 月 23 日 14:00 - 18:00</li>↵<li>地点：浙大玉泉校区邵逸夫科学馆 117 会堂</li>↵<li>报名链接：<a href="https://www.bagevent.com/event/1843696">https://www.bagevent.com/event/1843696</a></li>↵</ul>↵</blockquote>↵<h2>活动的主题如下：</h2>↵<h3>《DataHub2 - 你的最后一个 mock 方案》</h3>↵<p>分享时间：14:00 - 14:40</p>↵<p>主讲人介绍：张宇恒(<a href="https://github.com/zhangyuheng">@zhangyuheng</a>) - 蚂蚁国际高级前端工程师，<a href="https://github.com/macacajs/macaca-datahub">DataHub</a> 核心开发，格言：To Be A Better Hacker 。</p>↵<p><img src="//dn-cnode.qbox.me/FuvmcnVJIRbF-xqcrJDFfiag0bSi" alt="1536220954455-08024e18-182c-4e9c-8534-99ca63d0dd4b.png"></p>↵<p>内容：DataHub 是为解决复杂业务场景而诞生，但同时能够渐进式退化，为项目研发提供通用的 mock 解决方案。舒适的 Web 研发体验，从研发、测试、联调阶段贯穿始终的数据提供能力，剖析如何设计一个 mock 平台的核心理念和实践范式。从开发瓶颈和服务演进的角度讲述「<strong>最后一个</strong>」mock 方案。</p>↵<h3>《蚂蚁国际前端工程体系》</h3>↵<p>分享时间：14:50 - 15:30</p>↵<p>主讲人介绍：徐达峰(<a href="https://github.com/xudafeng">@xudafeng</a>) - 蚂蚁金服前端技术专家，阿里开源测试框架 <a href="https://github.com/alibaba/macaca">Macaca</a> 作者，<a href="https://github.com/xudafeng/autoresponsive-react">autoresponsive-react</a> 作者。</p>↵<p><img src="//dn-cnode.qbox.me/FgCUNY56nLYcXl7pXP1zaCIKNmOJ" alt="1536221094365-b2da0ffa-9103-478b-bd39-c8de3f06a0f2.png">↵内容：介绍蚂蚁金服国际部门在国际化与本土化进程中遇到的挑战和成长。剖析中国技术出海的特点和如何快速构建合适的前端工程体系，也包括工具体系、持续交付、自动化测试等几个方向上的实践和思考。同时也会涉及 Macaca 技术生态的国际化成长。</p>↵<h3>《如何实现 Node.js RPC》</h3>↵<p>分享时间：15:40 - 16:20</p>↵<p>主讲人介绍：高晓晨(<a href="https://github.com/gxcsoccer">@gxcsoccer</a>) - 蚂蚁金服前端技术专家，企业级 Web 框架应用框架 <a href="https://github.com/eggjs">Egg.js</a> 核心成员，<a href="https://github.com/alipay/sofa-rpc-node">sofa-rpc-node</a> 作者。</p>↵<p><img src="//dn-cnode.qbox.me/Fk0AYqZmVT5QmcnpFKO8AKCGjM-l" alt="1536222500407-c710cca5-36d4-4685-a9d2-ba34163c39ff.png">↵内容：介绍金服如何用 Node.js 来实现微服务，包括 RPC 原理、服务发现、负载均衡等话题。同时会介绍一下如何使用和扩展我们开源的 <a href="https://github.com/alipay/sofa-rpc-node">sofa-rpc-node</a> 项目来帮助外部实现 RPC，为系统架构带来新活力。</p>↵<h3>《GraphQL 生态介绍》</h3>↵<p>分享时间：16:30 - 17:10</p>↵<p>主讲人介绍：张开宇(<a href="https://github.com/zhangkaiyulw">@zhangkaiyulw</a>) - 前 Oracle 北京，香港 Beecrazy 员工。Ruby on Rails 贡献者之一。在后端，前端，移动端，以及 React Native 开发上，有丰富的经验。曾尝试将 iOS 系统的 Cocoa Touch API 风格移植到 HTML 网页中，并开发了基于其的一款国际象棋应用。有丰富大量的开源代码。</p>↵<p><img src="//dn-cnode.qbox.me/Fln08dUMEWfnEFwd4gmpC8QJJP9O" alt="1536220909272-71b9e8f9-1665-4b84-85a0-26d686b8a7c5.png"></p>↵<p>内容：本次演讲介绍实现GraphQL API的工具，包括 apollo-server、merge-graphql-schemas、graphql-middleware、amur 脚手架工具以及他们的用法。并五分钟内演示带有上传功能，混合字段类型的，带有数据关联的复杂系统的 API。</p>↵<h3>《 Megalo - 考拉的小程序解决方案》</h3>↵<p>分享时间：17:20 - 18:00</p>↵<p>主讲人介绍：网易考拉前端工程师，吴子然<a href="https://github.com/elcarim5efil">@elcarim</a>，<a href="https://github.com/kaola-fed/mpregular">mpregular</a>、<a href="https://github.com/kaola-fed/megalo">megalo</a> 核心开发。</p>↵<p><img src="//dn-cnode.qbox.me/Fh_VjuoZMUe_g5Tof53qU1iZ-wh_" alt="网易考拉_吴子然.jpeg">↵内容：介绍考拉的小程序框架发展历程，我们是如何在现有框架上做改造，在小程序上支持更多的 Vue 特性，让跨端开发变得更简单。</p>↵<hr>↵<h3>另征集 5 分钟的微话题</h3>↵<p>欢迎各位 show 出自己在业务中的最佳实践，有兴趣可以回复 <a href="https://github.com/cnodejs/nodeparty/issues/18">issue</a>。</p>↵<h2>活动纪念</h2>↵<p>本期活动准备了丰富的纪念品，包括高质量的贴纸，Egg.js 定制衣服。</p>↵<p><img src="//dn-cnode.qbox.me/Fv88sSzz8HkpXpXQZqL-wrQn-Zp0" alt="IMG_2503.JPG">↵<img src="//dn-cnode.qbox.me/FiTYZy9dy0F1hhDQ7crGX4n3PN-D" alt="1536228244512-e26fa2b2-bf5d-4b43-add7-02288c33e46c.png"></p>↵<hr>↵<h3>特别感谢浙大软件学院对本次活动提供场地支持！</h3>↵<hr>↵<h2>关于 NodeParty</h2>↵<p><img src="https://cdn.nlark.com/yuque/0/2018/png/95383/1536228236464-a496d8a0-4862-4946-af56-b55fb7c68af3.png" alt="image | center"></p>↵<p>NodeParty 品牌诞生于 CNode 社区，杭州 NodeParty 是由大搜车（Souche Inc.）发起的一个面向 Node.js 爱好者的技术分享聚会，希望能够构建一个持续的分享学习的平台，一起发展 Node.js 生态。</p>↵<ul>↵<li>按惯例，为了保证参会质量本活动会收取少量费用，活动所有收入将捐助给 “NodeParty 开源基金会” 用以之后的社区活动 。</li>↵<li>NodeParty 基金会运作机制和赞助商：<a href="http://nodeparty.foundation/">http://nodeparty.foundation</a></li>↵<li>往期活动信息：<a href="http://nodeparty.cn/">http://nodeparty.cn/</a></li>↵<li>感谢对开源社区的支持。</li>↵<li>企业赞助和曝光，请联系微信号：mier963</li>↵</ul>↵</div>'
    }
  },
}
</script>

<style scoped>
.card{
  margin-bottom: 10px;
  background: #ffffff;
  position: relative;
  padding: 16px 20px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  box-sizing: border-box;
}
.head{
  font-size: 15px;
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
}
.head span{
  margin-left: 10px;
}
.headImg{
  display: block;
  width: 24px;
  height: 24px;
}
.title{
  margin-bottom: 6px;
  width: 100%;
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.article{
  max-height: 50px;
  overflow: hidden;
  word-break: break-word;
  line-height: 1.6;
}
</style>
