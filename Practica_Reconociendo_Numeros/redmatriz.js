var synaptic = require('synaptic');
this.network = new synaptic.Architect.Perceptron(40, 25, 3);

creatures.forEach(function(creature)
{    // move
    var input = [,1,1,0,0,1,0,1,0,0,0,1];
    for (var i in creatures)
    {
      input.push(creatures[i].location.x);
      input.push(creatures[i].location.y);
      input.push(creatures[i].velocity.x);
      input.push(creatures[i].velocity.y);
    }
    var output = creature.network.activate(input);
    creature.moveTo(output);
    
    // learn
    var learningRate = .3;
    var target = [
      targetX(creature), 
      targetY(creature), 
      targetAngle(creature)];
    creature.network.propagate(learningRate, target);
});