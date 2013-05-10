# ScrollBuddy.js #

The Scroll observer helps you to create interactions if you reached a position on a page. For example, you like to show some content when the user has scolled down for 600 pixels.

## Options ##

* direction - Set the direction of Scroll bar. Accepts 'x' and 'y'. Default to 'y'.
* offset - Set an offest. Default to 0. Must be an integer! It`s posible to set negative values.
* autoHeight - get the start and end coordinates by element height.

## Options ##

### enter ###

(function) Function to execute when position is entered.

#### Signature ####

```javascript
onEnter(elmn, instance)
```

#### Arguments ####

* elmn - (element) the used element
* instance - (object) the class instance

### leave ###

(function) Function to execute when position is entered.

#### Signature ####

```javascript
onLeave(elmn, instance)
```

#### Arguments ####
* elmn - (element) the used element
* instance - (object) the class instance

## Example with int value##

```javascript
<script src="ScrollBuddy.js"></script>
<script>
    window.addEvent('domready', function() {
        new ScrollBuddy(500, {

            onEnter: function() {
              // fired after 500 scrolled pixels
            },

            onLeave: function() {
              // fired before 500 pixels are reached
            }
        });
    });
</script>
```

## Example with element##

```javascript
<script src="ScrollObserver.js"></script>
<script>
    window.addEvent('domready', function() {
        $('main').scrollBuddy({

            onEnter: function() {
              // fired when element with id main is reached
            },

            onLeave: function() {
              // fired before element with id main is reached
            }
        });
    });
</script>
```
