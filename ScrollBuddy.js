var ScrollBuddy = new Class({

    /**
     * Implemented classes
     */
    Implements: [Options, Events],

    /**
     * Options
     */
    options: {
        direction: 'y',
        offset: {
            top: 0,
            bottom: 0
        },
        autoHeight: false,
        scrollContainer: false
        /**
         * callback
         * onPositionEnter
         * onPositionLeave
         */
    },

    /**
     * Constructor
     * @param coord
     * @param options
     */
    initialize: function(coord, options) {
        var self = this,
            scroll;

        this.setOptions(options);
        this.scrollElement = this.options.scrollContainer || window;
        this.scrollItem = coord;
        this.coordStart = this._getPositionByType('start') + this.options.offset.top;
        this.coordStop = this._getPositionByType('stop') + this.options.offset.bottom;
        var isEntered = false;

        this.fireEvent('construct', [this]);

        this.scrollElement.addEvent('scroll', function(event) {

            scroll = self.getMethodDirection(this, 'getScroll');

            if(self._isBetween(scroll) && !isEntered) {
                isEntered++;
                self.positionEnter();
            } else if(!self._isBetween(scroll) && isEntered) {
                isEntered--;
                self.positionLeave();
            }
        });
    },

    _isBetween: function(scrolledSize) {
        return ( (scrolledSize >= this.coordStart) && (scrolledSize < this.coordStop) )
    }.protect(),

    /**
     * get a method with direction
     * @param el
     * @param type
     * @param myParam
     * @returns int
     */
    getMethodDirection: function(el, type, myParam) {
        myParam = myParam || this.options.direction;
        return el[type]()[myParam];
    },

    /**
     * check the type
     * @param mixed coord
     * TODO Refactore this ugly ry construct
     */
    _getPositionByType: function(type) {
        var coord = this.scrollItem;

        type = type || false;

        if(typeOf(coord) === 'number') {
            if(type === 'stop')
                return 10000000;
            return coord;
        } else if(typeOf(coord) === 'array' && coord.length == 2) {
            if(type === 'start') {
                if(typeOf(coord[0]) === 'number') {
                    return coord[0];
                } else if(typeOf(coord[0]) === 'string') {
                    return this.getMethodDirection(document.getElement(coord[0]), 'getPosition');
                }

            } else {
                if(typeOf(coord[1]) === 'number') {
                    return coord[1];
                } else if(typeOf(coord[1]) === 'string') {
                    return this.getMethodDirection(document.getElement(coord[1]), 'getPosition');
                }
            }
        } else if(typeOf(coord) === 'element') {
            if(type === 'stop' && !this.options.autoHeight) {
                return 10000000;
            } else if(type === 'stop' && this.options.autoHeight){
                return this.getMethodDirection(coord, 'getCoordinates', 'bottom');
            } else if(type === 'start') {
                return this.getMethodDirection(coord, 'getPosition');
            }
        }
    }.protect(),

    refresh: function() {
        this.coordStart = this._getPositionByType('start') + this.options.offset.top;
        this.coordStop = this._getPositionByType('stop') + this.options.offset.bottom;
    },

    /**
     * callback onEnter
     */
    positionEnter: function() {
        this.fireEvent('positionEnter', [this]);
        console.log('fgdg');
    },

    /**
     * callback onLeave
     */
    positionLeave: function() {
        this.fireEvent('positionLeave', [this]);
    }
});

Element.implement({
    'scrollBuddy': function(options) {
        options = options || {};
        new ScrollBuddy(this, options);
        return this;
    }
});
