function Emitters()
{
    this.events = {};
}

Emitters.prototype.on = function(type, listener)
{
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitters.prototype.Emit = function(type)
{
    if(this.events[type])
    {
        this.events[type].forEach(function (listener)
        {
            listener();
        } )
    }
}

module.exports = Emitters;