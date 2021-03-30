const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const rename = require('gulp-rename');
const glob = require('glob');

const themes = ['dark'];

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

const sourcesGlob = './*/css/**/*.scss';
const buildsGlob = './*/css/build/*.scss';

const destination = () => gulp.dest('../public/css');

const build = () =>
  gulp.src(sourcesGlob)
    .pipe(sass().on('error', sass.logError))
    .pipe(renameAs('dev'))
    .pipe(destination());

const startWatching = () => gulp.watch(sourcesGlob, build);

gulp.task('dev', gulp.series([createThemedBuilds, build, startWatching]));

gulp.task('css-dev', gulp.series([createThemedBuilds, build]));

gulp.task('css-prod', function () {
  return gulp.src(sourcesGlob)
    .pipe(sass(
      ...sassOptions,
      ...{ outputStyle: 'compressed' },
    )).on('error', sass.logError)
    .pipe(renameAs('min'))
    .pipe(destination());
});


const renameAs = (ext) => {
  return rename(function(path) {
    return {
      ...path,
      basename: `${path.basename}.${ext}`,
      dirname: '',
    };
  });
};

function createThemedBuilds(cb) {
  glob(buildsGlob, (err, files) => {
    files.forEach(file => {
      themes.forEach(theme => {
        const themed = file.replace(/\/_(.+)\.scss$/, `/$1.${theme}.scss`);
        if (!fs.existsSync(themed)) {
          const buildName = file.replace(/.+\/_(.+).scss$/, '$1');
          const code = `@import '../../../common/css/theme/${theme}';\n@import '${buildName}';\n`;
          console.log(`Create missing SCSS themed build: ${themed}`);
          fs.writeFileSync(themed, code);
        }
      });
    });
    cb();
  });
};
