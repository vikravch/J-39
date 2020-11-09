function sleep(timeout, fn) {
    setTimeout(fn, timeout)
}

sleep(1000, function ()
{
    console.log('Game over')
})

function getId(max, fn1, fn2)
{
    setTimeout(function ()
    {
        let id=Math.round(Math.random()*max)
        fn1(id, fn2)
    }, 100)
}

function getUser(id, fn)
{
    setTimeout(function ()
    {
        let user = {id, name:'Pavel'}
        fn(user)
    }, 1000)
}

function displayUser(user)
{
    console.log(user)
}

getId(10, getUser, displayUser)


