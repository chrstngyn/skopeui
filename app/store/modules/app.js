import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'app' })
class App extends VuexModule {
  isDrawerDisabled = false // disable drawer
  isDrawerToggled = false // toggle drawer
  isSelectedAreaCleared = false // study area (define study area)
  areInstructionsToggled = false // instructions
  isMetadataToggled = false // metadata

  steps = [
    {
      step: 1,
      name: 'index',
      label: 'Select Data Set',
      instructions:
        'Welcome to the Synthesizing Knowledge of Past Environments (SKOPE) application! To examine data, click on a dataset name, pan & zoom the map, define your area of interest, then select a variable layer. ',
    },
    {
      step: 2,
      name: 'dataset-id-studyarea',
      label: 'Define Study Area',
      instructions:
        'To define a selected area, use the map tools pan and zoom into the map and draw a polygon to select an area of study. When you are satisified with your selection, click next.',
    },
    {
      step: 3,
      name: 'dataset-id-visualize',
      label: 'Visualize Data',
      instructions: 'Instructions here',
    },
    {
      step: 4,
      name: 'dataset-id-analyze',
      label: 'Analyze Data',
      instructions: 'Instructions here',
    },
  ]

  stepNames = [
    'index',
    'dataset-id',
    'dataset-id-visualize',
    'dataset-id-analyze',
  ]

  /**
   * Determine if drawer can be toggled.
   * @param {number} step
   */
  @Mutation
  disableDrawer(step) {
    return step == 1 ? (this.isDrawerDisabled = 0) : (this.isDrawerDisabled = 1)
  }

  /**
   * Toggle drawer with options click filter datasets.
   * @param {boolean} isDrawerToggled
   */
  @Mutation
  setDrawer(isDrawerToggled) {
    this.isDrawerToggled = isDrawerToggled
  }

  /**
   * Clear or save previously defined study area.
   * @param {boolean} isSelectedAreaCleared
   */
  @Mutation
  setSelectedArea(isSelectedAreaCleared) {
    this.isSelectedAreaCleared = isSelectedAreaCleared
  }

  /**
   * Toggle metadata dialog
   * @param {boolean} isMetadataToggled
   */
  @Mutation
  setMetadata(isMetadataToggled) {
    this.isMetadataToggled = isMetadataToggled
  }

  /**
   * Toggle instructions dialog
   * @param {boolean} areInstructionsToggled
   */
  @Mutation
  setInstructions(areInstructionsToggled) {
    this.areInstructionsToggled = areInstructionsToggled
  }

  /**
   * Using step number, determine if drawer can be toggled.
   * @param {number} step
   * @returns {boolean}
   */
  @Action({ commit: 'disableDrawer' })
  canShowDrawer(step) {
    this.context.commit('disableDrawer', step)
    return isDrawerDisabled
  }

  /**
   * Pass value to toggle drawer.
   * @param {boolean} isDrawerToggled Value that determines show/hide (1/0)drawer
   */
  @Action({ commit: 'setDrawer' })
  toggleDrawer(isDrawerToggled) {
    this.context.commit('setDrawer', isDrawerToggled)
    return isDrawerToggled
  }

  /**
   * Pass value to toggle metadata dialog.
   * @param {boolean} isMetadataToggled
   * @returns {boolean}
   */
  @Action({ commit: 'setMetadata' })
  toggleMetadata(isMetadataToggled) {
    this.context.commit('setMetadata', isMetadataToggled)
    return isMetadataToggled
  }

  /**
   * Pass value to toggle instructions dialog.
   * @param {boolean} areInstructionsToggled
   * @returns {boolean}
   */
  @Action({ commit: 'setInstructions' })
  toggleInstructions(areInstructionsToggled) {
    this.context.commit('setInstructions', areInstructionsToggled)
    return areInstructionsToggled
  }

  /**
   * Pass value to clear or save current study area.
   * @param {boolean} isSelectedAreaCleared
   * @returns {boolean}
   */
  @Action({ commit: 'setSelectedArea' })
  clearStudyArea(isSelectedAreaCleared) {
    this.context.commit('setSelectedArea', isSelectedAreaCleared)
    return isSelectedAreaCleared
  }
}

export { App }
