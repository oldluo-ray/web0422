//引入gulp模块
const gulp = require('gulp')
const jshint = require('gulp-jshint') //检查js
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')
const rename = require('gulp-rename') // 给文件重命名的插件
const uglify = require('gulp-uglify') // 压缩js
const less = require('gulp-less') //将less转成css
const LessAutoprefix = require('less-plugin-autoprefix') //处理css兼容问题(加前缀)
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }) // 所有内核的浏览器往前兼
const concat = require('gulp-concat') //合并文件(css/js)
const cssmin = require('gulp-cssmin') // 压缩css
const htmlmin = require('gulp-htmlmin') //压缩html

// gulp.task('test', async function () {
//   // 将你的任务的任务代码放在这
//   console.log('test任务执行了')
// })
// 注意: 如果任务名是default. 执行的时候直接执行gulp指令
// gulp.task('default', () => {
//   console.log('默认的任务')
// })

// 检查js代码,是否符合规范.即便了不符合规范,但是只要符合语法规则,照样可以执行.只是控制台会有提示信息
gulp.task('jshint', function () {
  // 将你的任务的任务代码放在这
  return gulp
    .src('./src/js/*.js')
    .pipe(
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true, // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default')) // gulp插件中查看
})
// 将es6模块化语法,解析成commonjs的任务
gulp.task(
  'babel',
  () =>
    gulp
      .src('./src/js/*.js')
      .pipe(
        babel({
          //进行语法转换
          presets: ['@babel/env'],
        })
      )
      .pipe(gulp.dest('build/js')) //输出到指定目录
)

// 将commonjs,编译成浏览器认识的代码. 并且通过commonjs已经把多个js文件合并成一个js文件了
gulp.task('browserify', function () {
  return gulp
    .src('./build/js/index.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
})

// 压缩js
gulp.task('uglify', function () {
  return gulp
    .src('build/js/built.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
})

// 将less转成css,并且处理css兼容问题
gulp.task('less', function () {
  return gulp
    .src('./src/less/*.less')
    .pipe(
      less({
        plugins: [autoprefix], //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
})
// 合并文件
gulp.task('concat', function () {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
})

// 压缩css
gulp.task('cssmin', function () {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
})
//压缩html
gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true, //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
})
// 配置默认任务,让多个任务依次自动执行
gulp.task(
  'default',
  gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin'
  )
)
