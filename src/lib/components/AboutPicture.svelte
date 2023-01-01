<script lang="ts">

</script>

<div class="wrapper">
    <img class="img" src="../../public/images/me.jpg" alt="this is me">
    <div class="square left"></div>
    <div class="square right"></div>
</div>


<style lang="scss">
    @import '../../scss/variables.scss';
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: auto;
    }
    .square{
        position: absolute;
        height: 20rem;
        width: 20rem;
        outline: .15rem solid $orange;
        z-index: -100;
        box-shadow: 3px 3px 3px black;
    }
    .left{
        margin-right: 15%;
        margin-bottom: 5%;
        animation: leftSlideOut .3s linear;
        animation-fill-mode: forwards;
    }
    .right{
        margin-left: 15%;
        margin-top: 5%;
        animation: rightSlideOut .3s linear;
        animation-fill-mode: forwards;
    }
    .img{
        height: 60%;
        width: auto;
        z-index: 100;
        box-shadow: 3px 3px 3px black;
        &:hover ~ .left{
            animation: leftSlideIn .3s linear;
            animation-fill-mode: forwards;
        }
        &:hover ~ .right{
            animation: rightSlideIn .3s linear;
            animation-fill-mode: forwards;
        }
    }
    @keyframes leftSlideIn {
        from {
            transform: translate(0,0);
        }
        to {
            transform: translate(5%,5%);
        }
    }
    @keyframes rightSlideIn {
        from {
            transform: translate(0,0);
        }
        to {
            transform: translate(-5%,-5%);
        }
    }
    @keyframes leftSlideOut {
        from {
            transform: translate(5%,5%);
        }
        to {
            transform: translate(0,0);
        }
    }
    @keyframes rightSlideOut {
        from {
            transform: translate(-5%,-5%);
        }
        to {
            transform: translate(0,0);
        }
    }
</style>