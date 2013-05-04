/**
 * ScrollObserver
 * @author Joe Ray Gregory 2013
 * @copyright Joe Ray Gregory 2013
 * @license MIT Style
 * @type {Class}
 */
var ScrollObserver = new Class({

    /**
     * Implemented classes
     */
    Implements: [Options, Events],

    /**
     * Options
     */
    options: {
        direction: 'y',
        offset: 0
        /**
         * callback
         * onPositionEnter
         * onPositionLeave
         */
    },

    /**
     * Constructor
     * @param item
     * @param coord
     * @param options
     */
    initialize: function(item, coord, options) {
        var self = this,
            scroll;

        this.setOptions(options);
        this.scrollElement = item;
        this.coord = this._defineCoordinate(coord) + this.options.offset;
        var isEntered = false;

        this.scrollElement.addEvent('scroll', function(event) {

            scroll = self.getMethodDirection(this, 'getScroll');
            if(scroll >= self.coord && !isEntered) {
                isEntered++;
                self.positionEnter();
            } else if(scroll < self.coord && isEntered) {
                isEntered--;
                self.positionLeave();
            }
        });
    },

    /**
     * get a method with direction
     * @param el
     * @param type
     * @returns int
     */
    getMethodDirection: function(el, type) {
        if(type === 'getScroll') {
            return this._bindDirectionWithItem(el.getScroll());
        } else if(type === 'getPosition') {
            return this._bindDirectionWithItem(el.getPosition());
        }
    },

    /**
     * check direction and return int
     * @param object
     */
    _bindDirectionWithItem: function(item) {
        if(this.options.direction === 'y') {
            return item.y;
        } else if(this.options.direction === 'x') {
            return item.x;
        } else {
            return false;
        }
    }.protect(),

    /**
     * check the type
     * @param mixed coord
     */
    _defineCoordinate: function(coord) {

        if(typeOf(coord) === 'number') {
            return coord;
        } else if(typeOf(coord) === 'element') {
            return this.getMethodDirection(coord, 'getPosition');
        }
    }.protect(),

    /**
     * callback onEnter
     */
    positionEnter: function() {
        this.fireEvent('positionEnter', [this]);
    },

    /**
     * callback onLeave
     */
    positionLeave: function() {
        this.fireEvent('positionLeave', [this]);
    }
});
