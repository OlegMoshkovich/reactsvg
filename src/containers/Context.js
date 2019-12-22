
import React, { useState } from 'react';
import NavContext from '../components/nav_/navcontext_'
import ThemeContext from '../utils/ThemeContext';
import { ContentCard } from '../components/section/contentcard_'
import { ExtraLink } from './styles'
import { SocialNav } from '../components/nav_/socialnav'
import { connect } from 'react-redux'
import { getArticles } from '../actions/getarticles'

const Context = (props) => {
    //reference to the
    const themeHook = useState({})
    const [article, setArticle] = useState('empty')
    const [random, setRandom] = useState(1)
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(false)
    //normally this would be stored on the server for safety - however in this case it is ok to put it here
    //because there is a limit to the api calls,  there is no payment for the api and it is for demo purposes.
    const nyt = 'mnnfCWd6y4tQ4IipGbUkIZXICpFqsbHH1'

    // props.getArticles('politics')
    console.log('articles', props);

    // move the fetch to Redux - use thunk for the async actions
    const fetchArticles = (searchTerm) => {
        let topic = 'New York Times ' + searchTerm.toUpperCase() + ' snippet'
        setLoading(true)
        setSubject(topic)

        let genRandom = Math.floor(Math.random() * 10)
        genRandom !== random ? setRandom(genRandom) : setRandom(genRandom + 1)

        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${nyt}`)
            .then(resp => resp.json())
            .then(data => data.response)
            .then(data => data.docs)
            .then(docs => {
                return (
                    setLoading(false),
                    setArticle(docs[random].snippet))
            })
            .catch((function (error) {
                //set loading to false in order to breal out of the loader and message the user
                setLoading(false)
                //write a check state to evaluate the errror - so far most of the errors are coming from the 
                //api limits -- therefore message to the user to wait until the next request
                setArticle('limit is reached - please wait a bit...')
            }))
    }

    return (
        <div>
            {/* Theme Context -- every component inside of the ThemeContext has access to the themeHook 
            -- the themes are set in the NavContext -- and consumed by the SocialNav and the ContentCard  */}
            <ThemeContext.Provider value={themeHook} >
                <NavContext fetchArticles={fetchArticles} />
                <SocialNav />
                <ExtraLink href='/'>portfolio</ExtraLink>
                <ContentCard article={article} subject={subject} loading={loading} />
            </ThemeContext.Provider>
        </div>
    )
}

//return object literal expression availble as props to the compoenent
const mapStateToProps = (state) => ({ state })
const mapDispatchtoProps = dispatch => ({
    getArticles: search => dispatch(getArticles(search))
})

export default connect(mapStateToProps, mapDispatchtoProps)(Context)

