import Configure from "./util/configure.js";
import StyleRender from "./util/style.js";
import Render from "./render.js";
/**
 * 弹幕类
 * @class
 */
export default class Qalaxy extends Render {
    /**
     * @param {element} [option.el] 画布节点
     * @param {element} [option.render] 渲染画布节点
     * @param {number} [option.rate] 帧移动速率
     * @param {string} [option.color] 默认字体颜色
     * @param {number} [option.opacity] 默认字体透明度
     * @param {number} [option.size] 默认字体大小
     * @param {string} [option.font] 默认字体
     * @constructor
     */
    constructor(option) {
        super(Configure(option));
        this.poll_worker = this.qalaxy_poll.bind(this);
        this.qalaxy_init();
    }
    /**
     * 初始化
     * @returns {void}
     * @private
     */
    qalaxy_init() {
        StyleRender();
        requestAnimationFrame(this.poll_worker);
    }
    /**
     * 主循环
     * @param {number} deplay 时间偏移
     * @returns {void}
     * @private
     */
    qalaxy_poll(deplay) {
        this.display_poll(deplay);
        this.render_poll(deplay);
        this.deplay = deplay;
        requestAnimationFrame(this.poll_worker);
    }
    /**
     * 添加弹幕列表
     * @param {object[]} values 弹幕列表
     * @returns {void}
     * @public
     */
    append(values) {
        this.render_push(values);
    }
}
