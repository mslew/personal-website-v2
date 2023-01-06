<script lang="ts">

</script>

<div class="wrapper">
    <img class="img" src="images/me.jpg" alt="this is me">
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
        @include media-breakpoint-down(sm){
            font-size: .8rem;
            margin-right: 8rem;
        } 
    }
    .square{
        position: absolute;
        height: 20rem;
        width: 20rem;
        outline: .15rem solid $orange;
        z-index: -100;
        box-shadow: 3px 3px 3px black;
        @include media-breakpoint-down(xl){
            height: 16rem;
            width: 16rem;
        }
        @include media-breakpoint-down(lg){
            height: 20rem;
            width: 20rem;
        }
        @include media-breakpoint-down(md){
            height: 15rem;
            width: 15rem;
        }
        @include media-breakpoint-down(sm){
            height: 10rem;
            width: 10rem;
        }
    }
    .left{
        margin-right: 20rem;
        margin-bottom: 8rem;
        animation: leftSlideOut .3s linear;
        animation-fill-mode: forwards;
        @include media-breakpoint-down(xxl){
            margin-right: 16rem;
            margin-bottom: 4rem;
        }
        @include media-breakpoint-down(xl){
            margin-right: 18rem;
            margin-bottom: 8rem;
        }
        @include media-breakpoint-down(lg){
            margin-right: 15rem;
            margin-bottom: 5rem;
        }
        @include media-breakpoint-down(md){
            margin-right: 14rem;
            margin-bottom: 5rem;
        }
        @include media-breakpoint-down(sm){
            margin-right: 13rem;
            margin-bottom: 6rem;
        }
    }
    .right{
        margin-left: 20rem;
        margin-top: 8rem;
        animation: rightSlideOut .3s linear;
        animation-fill-mode: forwards;
        @include media-breakpoint-down(xxl){
            margin-left: 16rem;
            margin-top: 4rem;
        }
        @include media-breakpoint-down(xl){
            margin-left: 18rem;
            margin-top: 8rem;
        }
        @include media-breakpoint-down(lg){
            margin-left: 15rem;
            margin-top: 5rem;
        }
        @include media-breakpoint-down(md){
            margin-left: 14rem;
            margin-top: 5rem;
        }
        @include media-breakpoint-down(sm){
            margin-left: 13rem;
            margin-top: 6rem;
        }
    }
    .img{
        height: 60%;
        width: auto;
        z-index: 0;
        box-shadow: 3px 3px 3px black;
        &:hover ~ .left{
            animation: leftSlideIn .3s linear;
            animation-fill-mode: forwards;
        }
        &:hover ~ .right{
            animation: rightSlideIn .3s linear;
            animation-fill-mode: forwards;
        }
        @include media-breakpoint-down(md){
            height: 50%;
            width: auto;
        }
        @include media-breakpoint-down(sm){
            height: 40%;
            width: auto;
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