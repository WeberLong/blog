# 阿拉伯语右排布局

## 右排布局概述
在普通的网页里，阅读方向是从左往右，但阿拉伯语的阅读方向是从右往左。通过查看阿拉伯语网站和`Google`的[Material Design双向性文章](https://www.mdui.org/design/usability/bidirectionality.html)，对比从左到右（LTR）语言网站，从右到左（RTL）语言的网站特点：
- 排版是从右往左
- 文本是向右对齐且从右往左阅读，文本方向始终和语言保持一致，比如数字(电话号码、时间)
- 方向性图标和LTR相反，其他的图标和图片不会镜像
<img :src="$withBase('/rtl_0.jpg')">

通过上面知道RTL布局的特点后，我们在现有的项目里支持RTL布局需要考虑：
- 以低成本、代码入侵少、可兼容、可维护的改造线上的代码支持RTL布局
- 对于未来新增的页面功能能快速支持LTR和RTL布局

## RTL布局两种方案
### 方案一: 基于`transform`镜像
通过`transform`的镜像翻转，使用`CSS3`的`transform`属性，通过`transform: scaleX(-1)`可以使页面沿着X轴进行水平翻转,可以快速的解决布局镜像的问题，思路：
- 在阿拉伯语页面上添加上全局翻转：
  ``` css
  /* xx/index.css */
  html[lang="ar"] {
    transform: scaleX(-1);
  }
  ```
- 将页面中不需要翻转的内容进行包裹
  ``` css
  /* xx/index.css */
  html[lang="ar"] .not-flip {
    transform: scaleX(-1);
  }
  ```

处理后的效果如下:
<img :src="$withBase('/rtl_1.png')">

`transform`方案优点是无需修改js逻辑，只需要处理css；缺点是我们有五个项目，PC端和移动端，代码入侵大，工作量大，所有涉及到文本和图片的地方都需要进行处理。

### 方案二: 基于`direction`属性
`direction`与在`html`标签上直接添加`dir="rtl"`的作用一样，可以改变我们网站的布局，`CSS`手册中对`direction`属性是这样描述的：该属性指定了块的基本书写方向，以及针对`Unicode`双向算法的嵌入和覆盖方向。通俗的讲，排版改成从右往左，文字和图片方向不变。
我们在github上找到`postcss-rtl`开源插件，它的原理就是对`CSS`文件进行处理，比如将 `CSS`属性中的`left`改为`right`，`right`改为`left`。
  ``` css
  [dir] .foo {
    text-align: right;
  }
  [dir="ltr"] .foo {
    text-align: right;
  }
  [dir="rtl"] .foo {
    text-align: left;
  }
  ```
基于`direction`属性RTL布局方案：
- `webpack`中引入插件[postcss-rtl](https://github.com/vkalinichev/postcss-rtl)
  - `vue-cli2`脚手架配置:
  安装依赖`yarn add postcss-loader postcss-rtl -D`
  在`webpack`中(`cloud/build/utils.js`)文件里添加`postcss-loader`的插件`postcss-rtl`
    ``` js
    var postcssLoader = {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [ 'postcss-rtl', {} ] // 添加阿拉伯语右排布局插件
          ]
        }
      }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
      var loaders = [cssLoader, autoprefixerLoader, postcssLoader]
      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }
      ...
    }
    ```
  - `vue-cli3`脚手架配置:
  安装依赖`yarn add postcss-rtl -D`
  在`webpack`中(`apps-moblie-docs/vue.config.js`)文件里添加`postcss-rtl`插件
    ``` js
    css: {
      sourceMap: !isProduction,
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-rtl')() // 添加阿拉伯语右排布局插件
          ]
        }
      }
    }
    ```
- `html`标签属性添加默认值`dir="ltr"`, 比如: `<html dir="ltr">`
- 在`app.vue`入口里添加根据语言判断修改html的dir属性，比如: `document.documentElement.setAttribute('dir', this.$i18n.locale === 'ar' ? 'rtl' : 'ltr')`
- 方向的图标处理：
  ``` css
  // 适配右排布局图标方向
  [dir=rtl]{
    .components-icons{
      &.components-icons-back{
        &:before {
          display: inline-block;
          transform: scaleX(-1);
        }
      }
    }
  }
  ```
- 元素拼接的语句的处理：
  ``` css
  // 适配右排布局
  [dir=rtl] {
    .yun-row__desc {
      direction: ltr;
      display: inline-flex;
      justify-content: flex-end;
    }
  }
  ```

处理后的效果如下:
<img :src="$withBase('/rtl_2.png')">

`direction`方案优点是工作量减少，代码入侵减少；缺点是需要处理方向性的图标的方向和被元素拼接的语句(断句)。

## 结论

| 方案       | 优点                      | 缺点                  |
| ----      | ----                      | ----                 |
| `transform` | 无需修改`js`逻辑，只需要处理`css` | 代码入侵大，工作量大   |
| `direction` | 工作量减少，代码入侵减少     | 处理方向性的图标的方向和被元素拼接的语句(断句)  |

综合`transform`和`direction`方案各方面比较，`direction`方案的工作量减少、代码入侵少，最后决定使用`direction`方案。
