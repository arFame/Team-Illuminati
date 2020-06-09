//==============================================================================
// The following example demonstrates how to animate the properties of an object
// using drivers and samplers.
//
// Project setup:
// - Insert a plane
//==============================================================================

// Load in the required modules
const Animation = require('Animation');
const FaceTracking = require('FaceTracking');
const Scene = require('Scene');

// Locate the mouth in the Scene
const mouth = Scene.root.find('mouth');

//==============================================================================
// Animate the mouth's vertical scale according to mouth openness
//==============================================================================

// Store a reference to the mouth openness signal of a detected face
const mouthOpenness = FaceTracking.face(0).mouth.openness;

// Create a value driver using the mouth openness with the output normalized and
// clamped between 0.1 and 0.6
const mouthOpennessDriver = Animation.valueDriver(mouthOpenness, 0.05, 0.2);

// Create a sampler with a linear change from 1 to 2
const linearSampler = Animation.samplers.linear(0.5, 1);

// Create an animation combining the driver and sampler
const scaleAnimation = Animation.animate(mouthOpennessDriver, linearSampler);

// Bind the scale animation signal to the y-axis scale signal of the mouth
mouth.transform.scaleY = scaleAnimation;

//==============================================================================
// Animate the mouth's horizontal position continuously
//==============================================================================

