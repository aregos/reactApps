import React from 'react'
import ItemList from '../item-list'
import {withData , withSwapiService, withChildFunction, compose} from '../hoc-helpers'


const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({ model , name }) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiservice) => {
    return {
        getData : swapiservice.getAllPeople()
    }
}
const mapPlanetMethodsToProps = (swapiservice) => {
    return {
        getData : swapiservice.getAllPlanets()
    }
}
const mapStarshipMethodsToProps = (swapiservice) => {
    return {
        getData : swapiservice.getAllStarships()
    }
}

const PersonList =  compose(
                            withSwapiService(mapPersonMethodsToProps),
                            withData,
                            withChildFunction(renderName)
                            )(ItemList)

const PlanetList = compose(
                            withSwapiService(mapPlanetMethodsToProps),
                            withData,
                            withChildFunction(renderName)
                            )(ItemList)


const StarshipList =  compose(
                            withSwapiService(mapStarshipMethodsToProps),
                            withData,
                            withChildFunction(renderModelAndName)
                            )(ItemList)


export {
    PersonList,
    PlanetList,
    StarshipList
}