var VisualizationManager = function () {};

VisualizationManager.prototype.createSolarSystem = function(paper){
    var viz = new Visualizer();
    viz.setClientInput(20, 2);
    viz.renderSolarSystem(paper);
    //viz.searchPlanet('planet_3');
}