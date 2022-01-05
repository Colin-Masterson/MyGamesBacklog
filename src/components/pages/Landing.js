import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <header className='navbar'>
                <div className='container flex'>
                    <h1>MyGamesBacklog</h1>
                    <Link className='login' to='/signin'>
                        Login
                    </Link>
                </div>
            </header>
            <section className='landing-info'>
                <div className='container grid'>
                    <div className='flex'>
                        <h2>Keep track of your game collection. </h2>
                        <p>
                            MyGameBacklog makes it easy to keep track of your
                            games and beat your backlog by bringing everything
                            together in one place.
                        </p>
                        <Link to='/signup'>
                            <input
                                type='button'
                                className='btn'
                                value='Sign Up'
                            />
                        </Link>
                    </div>
                    <svg
                        viewBox='0 0 736 667'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M631.863 278.498C642.008 292.594 653.326 294.843 665.818 285.246C660.576 274.116 659.328 262.01 660.724 249.258H636.39C637.469 260.464 637.179 270.899 631.863 278.498Z'
                            fill='#FFB8B8'
                        />
                        <path
                            d='M672.042 647.369L685.059 638.373L690.717 543.156V492.923L660.724 492.174L669.213 542.406L672.042 647.369Z'
                            fill='#FFB8B8'
                        />
                        <path
                            d='M634.313 647.369L621.297 638.373L615.639 543.156V492.923L645.631 492.174L637.143 542.406L634.313 647.369Z'
                            fill='#FFB8B8'
                        />
                        <path
                            d='M614.32 503.42L646.011 499.671L651.104 461.434L657.329 498.921L691.85 495.922C692.604 477.705 690.688 458.956 686.19 439.692L610.358 437.443L614.32 503.42Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M581.381 359.82L543.26 320.93C542.864 320.527 542.429 320.196 541.967 319.946L536.426 316.96C531.976 314.561 523.499 306.582 527.633 298.367C530.966 291.743 543.725 303.609 545.294 308.005C545.79 309.388 546.604 310.528 547.619 311.262L555.365 316.886C555.554 317.023 555.748 317.145 555.947 317.252L585.442 333.09C586.259 333.529 587.144 333.703 588.023 333.598C588.901 333.493 589.748 333.112 590.493 332.486L595.841 327.994C596.601 327.355 597.468 326.971 598.366 326.876C599.264 326.78 600.166 326.976 600.994 327.447C601.822 327.917 602.551 328.648 603.118 329.575C603.685 330.503 604.073 331.599 604.248 332.77L606.016 344.587C606.27 346.288 606.062 348.054 605.428 349.572C604.794 351.089 603.775 352.261 602.552 352.878L586.738 360.864C585.852 361.311 584.895 361.45 583.957 361.267C583.019 361.085 582.132 360.586 581.381 359.82V359.82Z'
                            fill='#FFB8B8'
                        />
                        <path
                            d='M588.462 331.485C599.016 327.735 597.908 347.27 605.96 356.876L621.792 340.317L612.622 281.497C610.162 282.428 607.899 284.105 606.012 286.394C604.124 288.684 602.665 291.523 601.749 294.688L588.462 331.485Z'
                            fill='#564FCC'
                        />
                        <path
                            d='M608.095 441.191H687.888C674.974 395.087 676.231 347.669 687.227 299.348C687.412 298.546 687.379 297.683 687.135 296.909C686.891 296.135 686.451 295.499 685.891 295.109L662.988 279.248C653.998 286.998 644.335 284.616 634.127 274L609.227 282.996C616.005 336.932 616.198 389.759 608.095 441.191Z'
                            fill='#564FCC'
                        />
                        <path
                            d='M628.047 664.979L594.794 666.846C593.346 666.927 591.927 666.296 590.809 665.074C589.691 663.852 588.954 662.125 588.74 660.227V660.227C588.523 658.309 588.855 656.353 589.671 654.743C590.486 653.132 591.726 651.984 593.148 651.522L598.788 649.69L620.956 632.668C624.24 637.173 628.763 640.983 634.291 644.227L634.356 656.196C634.368 658.457 633.717 660.637 632.54 662.275C631.363 663.914 629.753 664.883 628.047 664.979V664.979Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M735.671 666.999H0.267578V664.592H736L735.671 666.999Z'
                            fill='#3F3D56'
                        />
                        <path
                            d='M678.033 664.31L711.286 666.177C712.734 666.258 714.153 665.627 715.271 664.405C716.388 663.183 717.125 661.456 717.34 659.557V659.557C717.556 657.64 717.224 655.684 716.409 654.074C715.593 652.463 714.353 651.315 712.932 650.853L707.292 649.022L685.124 631.999C681.839 636.504 677.317 640.314 671.788 643.558L671.724 655.527C671.711 657.788 672.362 659.968 673.539 661.606C674.716 663.245 676.327 664.214 678.033 664.31V664.31Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M646.011 262.754C656.012 262.754 664.12 252.012 664.12 238.762C664.12 225.512 656.012 214.77 646.011 214.77C636.009 214.77 627.902 225.512 627.902 238.762C627.902 252.012 636.009 262.754 646.011 262.754Z'
                            fill='#FFB8B8'
                        />
                        <path
                            d='M674.306 433.694L668.323 449.106C667.795 450.466 667.491 451.958 667.429 453.486C667.368 455.013 667.551 456.54 667.967 457.967C668.383 459.393 669.022 460.687 669.842 461.763C670.662 462.84 671.645 463.673 672.726 464.21V464.21C673.87 464.779 675.096 465.001 676.313 464.859C677.53 464.718 678.708 464.217 679.759 463.394C680.811 462.571 681.711 461.446 682.391 460.101C683.072 458.757 683.517 457.228 683.693 455.627L686.19 432.944L695.245 375.964L694.679 347.474H676.57C682.747 368.664 679.682 399.92 674.306 433.694Z'
                            fill='#FFB8B8'
                        />
                        <path
                            d='M673.74 350.473H698.074L694.542 315.117C694.063 310.322 692.685 305.762 690.535 301.854C688.384 297.946 685.528 294.814 682.229 292.743L673.74 350.473Z'
                            fill='#564FCC'
                        />
                        <path
                            d='M665.263 225.547C665.625 222.342 665.473 219.072 664.817 215.95C664.162 212.828 663.017 209.924 661.457 207.428C658.367 202.584 653.189 198.62 644.597 200.49C625.85 204.571 620.445 225.246 622.281 230.446C624.118 235.645 629.747 247.699 629.747 247.699C629.747 247.699 625.616 235.767 630.1 233.338C634.584 230.91 651.937 221.342 657.994 225.652C659.709 226.793 661.164 228.515 662.213 230.643C663.262 232.772 663.866 235.23 663.965 237.769L665.263 225.547Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M355.312 125.698L348.031 130.593C339.645 108.715 328.534 88.8672 315.167 71.8834C249.521 -11.7268 144.771 -8.99326 81.6612 77.977C18.5514 164.947 20.6147 303.724 86.2606 387.335C98.7549 403.28 113.069 416.515 128.675 426.554L125.113 436.287C100.377 420.374 78.8533 396.892 62.3213 367.781C45.7894 338.669 34.7233 304.764 30.0374 268.866C25.3515 232.968 27.1803 196.108 35.3727 161.332C43.5651 126.556 57.886 94.861 77.1521 68.8669C96.4181 42.8728 120.076 23.3252 146.172 11.8394C172.268 0.353492 200.052 -2.74101 227.229 2.81152C254.406 8.36406 280.195 22.4042 302.467 43.772C324.738 65.1399 342.852 93.2219 355.312 125.698V125.698Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M108.985 326.932C98.2752 341.691 92.4297 361.481 92.734 381.95C93.0383 402.418 99.4676 421.888 110.607 436.077C121.747 450.265 136.685 458.009 152.135 457.606C167.585 457.203 182.281 448.685 192.99 433.927L203.021 420.104L119.015 313.109L108.985 326.932Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M113.387 305.258C111.003 308.551 109.703 312.962 109.77 317.523C109.838 322.085 111.269 326.424 113.749 329.59L190.799 427.725C193.282 430.888 196.612 432.614 200.056 432.524C203.5 432.435 206.777 430.536 209.164 427.246C211.552 423.955 212.855 419.544 212.787 414.981C212.719 410.418 211.286 406.077 208.802 402.914L131.753 304.779C129.267 301.621 125.938 299.898 122.495 299.988C119.052 300.078 115.776 301.973 113.387 305.258Z'
                            fill='#535461'
                        />
                        <path
                            d='M344.48 225.162L354.511 211.339C365.22 196.58 371.066 176.79 370.761 156.321C370.457 135.853 364.028 116.383 352.888 102.194C347.372 95.1691 340.866 89.6519 333.741 85.9579C326.615 82.2638 319.01 80.4652 311.361 80.6649C295.911 81.068 281.215 89.5858 270.505 104.344L260.474 118.167L344.48 225.162Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M254.332 111.026C251.948 114.318 250.647 118.729 250.715 123.29C250.783 127.852 252.214 132.191 254.693 135.357L331.743 233.492C334.227 236.651 337.556 238.374 340.999 238.283C344.441 238.192 347.716 236.293 350.102 233.004C352.489 229.716 353.792 225.306 353.725 220.745C353.658 216.184 352.228 211.845 349.747 208.681L272.697 110.546C270.212 107.388 266.883 105.665 263.44 105.755C259.997 105.845 256.721 107.74 254.332 111.026V111.026Z'
                            fill='#535461'
                        />
                        <path
                            d='M286.834 337.813V329.84C286.834 329.84 313.096 310.269 334.434 329.84V337.088L286.834 337.813Z'
                            fill='#535461'
                        />
                        <path
                            d='M525.928 337.813V329.84C525.928 329.84 552.19 310.269 573.528 329.84V337.088L525.928 337.813Z'
                            fill='#535461'
                        />
                        <path
                            d='M365.62 337.088H339.905C339.905 337.088 333.34 326.94 311.455 327.665C289.57 328.39 285.193 337.088 285.193 337.088C285.193 337.088 263.581 356.297 258.657 380.217C258.657 380.217 232.122 485.683 231.575 568.316C231.027 650.949 255.101 662.547 267.685 664.721C280.269 666.896 302.701 663.996 324.586 590.786L333.887 548.02C333.887 548.02 335.528 522.65 355.225 538.597C374.921 554.544 392.429 529.899 392.429 529.899H466.291C466.291 529.899 490.912 550.195 513.344 534.248C513.344 534.248 522.098 519.026 530.305 570.491C530.305 570.491 555.472 676.319 594.318 665.446C633.164 654.573 628.787 566.141 628.787 566.141C628.787 566.141 623.589 430.957 602.252 383.116C602.252 383.116 581.734 333.464 568.056 331.289C568.056 331.289 538.512 324.041 527.022 330.565L520.456 337.813L365.62 337.088Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M305.984 471.186C332.272 471.186 353.583 442.952 353.583 408.124C353.583 373.296 332.272 345.062 305.984 345.062C279.695 345.062 258.384 373.296 258.384 408.124C258.384 442.952 279.695 471.186 305.984 471.186Z'
                            fill='#535461'
                        />
                        <path
                            d='M554.378 471.186C580.667 471.186 601.978 442.952 601.978 408.124C601.978 373.296 580.667 345.062 554.378 345.062C528.09 345.062 506.778 373.296 506.778 408.124C506.778 442.952 528.09 471.186 554.378 471.186Z'
                            fill='#535461'
                        />
                        <path
                            d='M314.278 394.062L307.931 401.499C307.394 402.126 306.702 402.471 305.986 402.471C305.27 402.471 304.579 402.126 304.041 401.499L297.684 394.062C297.373 393.699 297.123 393.253 296.952 392.753C296.78 392.253 296.69 391.711 296.688 391.162V370.7C296.689 369.667 297 368.677 297.552 367.947C298.104 367.217 298.852 366.807 299.632 366.807H312.352C313.131 366.805 313.879 367.214 314.431 367.942C314.983 368.671 315.294 369.66 315.296 370.692V391.148C315.292 391.701 315.2 392.248 315.024 392.75C314.849 393.253 314.594 393.7 314.278 394.062Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M314.278 422.179L307.931 414.749C307.394 414.122 306.702 413.776 305.986 413.776C305.27 413.776 304.579 414.122 304.041 414.749L297.684 422.186C297.373 422.549 297.123 422.995 296.952 423.495C296.78 423.994 296.69 424.536 296.688 425.085V445.526C296.687 446.559 296.995 447.549 297.545 448.281C298.095 449.012 298.841 449.424 299.621 449.426H312.352C313.131 449.428 313.879 449.02 314.431 448.291C314.983 447.562 315.294 446.573 315.296 445.541V425.093C315.292 424.539 315.2 423.993 315.024 423.49C314.849 422.988 314.594 422.541 314.278 422.179V422.179Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M295.375 419.127L300.988 410.704C301.461 409.992 301.722 409.076 301.722 408.127C301.722 407.179 301.461 406.263 300.988 405.551L295.375 397.128C295.101 396.716 294.764 396.386 294.387 396.159C294.01 395.931 293.601 395.812 293.186 395.809H277.757C276.978 395.811 276.23 396.222 275.68 396.953C275.129 397.684 274.819 398.675 274.819 399.708V416.561C274.818 417.593 275.126 418.584 275.676 419.316C276.226 420.047 276.973 420.459 277.752 420.461H293.192C293.606 420.455 294.015 420.333 294.391 420.103C294.767 419.873 295.102 419.541 295.375 419.127V419.127Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M316.598 419.127L310.995 410.697C310.521 409.986 310.259 409.069 310.259 408.12C310.259 407.171 310.521 406.255 310.995 405.543L316.609 397.121C316.883 396.709 317.219 396.378 317.596 396.151C317.974 395.923 318.383 395.804 318.797 395.801H334.226C335.005 395.799 335.753 396.208 336.305 396.936C336.857 397.665 337.168 398.654 337.17 399.687V416.554C337.171 417.586 336.863 418.577 336.313 419.308C335.763 420.04 335.016 420.452 334.237 420.454H318.803C318.385 420.453 317.973 420.334 317.592 420.105C317.212 419.877 316.873 419.543 316.598 419.127V419.127Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M370.544 522.65C389.581 522.65 405.013 502.205 405.013 476.985C405.013 451.764 389.581 431.319 370.544 431.319C351.508 431.319 336.075 451.764 336.075 476.985C336.075 502.205 351.508 522.65 370.544 522.65Z'
                            fill='#535461'
                        />
                        <path
                            d='M489.817 522.65C508.854 522.65 524.286 502.205 524.286 476.985C524.286 451.764 508.854 431.319 489.817 431.319C470.781 431.319 455.349 451.764 455.349 476.985C455.349 502.205 470.781 522.65 489.817 522.65Z'
                            fill='#535461'
                        />
                        <path
                            d='M370.544 507.429C383.235 507.429 393.523 493.798 393.523 476.985C393.523 460.171 383.235 446.541 370.544 446.541C357.853 446.541 347.565 460.171 347.565 476.985C347.565 493.798 357.853 507.429 370.544 507.429Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M370.544 498.005C367.406 498.005 364.339 496.772 361.729 494.463C359.12 492.153 357.086 488.87 355.886 485.029C354.685 481.188 354.37 476.961 354.983 472.884C355.595 468.806 357.106 465.06 359.325 462.121C361.544 459.181 364.371 457.179 367.449 456.368C370.527 455.557 373.717 455.973 376.616 457.564C379.516 459.155 381.994 461.849 383.737 465.306C385.48 468.763 386.411 472.827 386.411 476.985C386.406 482.558 384.733 487.901 381.758 491.841C378.784 495.782 374.751 497.999 370.544 498.005V498.005ZM370.544 457.414C367.623 457.414 364.767 458.561 362.337 460.712C359.908 462.862 358.015 465.919 356.897 469.495C355.778 473.071 355.486 477.006 356.056 480.803C356.626 484.599 358.033 488.086 360.099 490.823C362.165 493.56 364.797 495.424 367.662 496.18C370.528 496.935 373.498 496.547 376.198 495.066C378.897 493.585 381.204 491.076 382.827 487.858C384.45 484.639 385.317 480.855 385.317 476.985C385.312 471.796 383.755 466.821 380.985 463.152C378.216 459.483 374.461 457.419 370.544 457.414V457.414Z'
                            fill='#535461'
                        />
                        <path
                            d='M489.817 507.429C502.508 507.429 512.797 493.798 512.797 476.985C512.797 460.171 502.508 446.541 489.817 446.541C477.126 446.541 466.838 460.171 466.838 476.985C466.838 493.798 477.126 507.429 489.817 507.429Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M489.818 498.005C486.679 498.005 483.612 496.772 481.003 494.463C478.393 492.153 476.36 488.87 475.159 485.029C473.958 481.188 473.644 476.961 474.256 472.884C474.868 468.806 476.379 465.06 478.598 462.121C480.817 459.181 483.644 457.179 486.722 456.368C489.8 455.557 492.99 455.973 495.889 457.564C498.789 459.155 501.267 461.849 503.01 465.306C504.754 468.763 505.684 472.827 505.684 476.985C505.679 482.558 504.006 487.901 501.032 491.841C498.057 495.782 494.024 497.999 489.818 498.005ZM489.818 457.414C486.896 457.414 484.04 458.561 481.61 460.712C479.181 462.862 477.288 465.919 476.17 469.495C475.052 473.071 474.759 477.006 475.329 480.803C475.899 484.599 477.306 488.086 479.372 490.823C481.438 493.56 484.07 495.424 486.936 496.18C489.801 496.935 492.771 496.547 495.471 495.066C498.17 493.585 500.477 491.076 502.1 487.858C503.723 484.639 504.59 480.855 504.59 476.985C504.585 471.796 503.028 466.821 500.258 463.152C497.489 459.483 493.734 457.419 489.818 457.414V457.414Z'
                            fill='#535461'
                        />
                        <path
                            d='M431.275 495.106C436.714 495.106 441.123 489.265 441.123 482.059C441.123 474.853 436.714 469.011 431.275 469.011C425.836 469.011 421.427 474.853 421.427 482.059C421.427 489.265 425.836 495.106 431.275 495.106Z'
                            fill='#535461'
                        />
                        <path
                            d='M416.224 441.358C417.411 441.358 418.374 440.083 418.374 438.51C418.374 436.936 417.411 435.661 416.224 435.661C415.036 435.661 414.073 436.936 414.073 438.51C414.073 440.083 415.036 441.358 416.224 441.358Z'
                            fill='#535461'
                        />
                        <path
                            d='M424.277 441.358C425.465 441.358 426.428 440.083 426.428 438.51C426.428 436.936 425.465 435.661 424.277 435.661C423.09 435.661 422.127 436.936 422.127 438.51C422.127 440.083 423.09 441.358 424.277 441.358Z'
                            fill='#535461'
                        />
                        <path
                            d='M423.205 454.877C424.392 454.877 425.355 453.601 425.355 452.028C425.355 450.455 424.392 449.179 423.205 449.179C422.017 449.179 421.055 450.455 421.055 452.028C421.055 453.601 422.017 454.877 423.205 454.877Z'
                            fill='#535461'
                        />
                        <path
                            d='M430.728 455.239C431.937 455.239 432.917 453.941 432.917 452.34C432.917 450.739 431.937 449.44 430.728 449.44C429.519 449.44 428.54 450.739 428.54 452.34C428.54 453.941 429.519 455.239 430.728 455.239Z'
                            fill='#535461'
                        />
                        <path
                            d='M438.24 454.877C439.428 454.877 440.39 453.601 440.39 452.028C440.39 450.455 439.428 449.179 438.24 449.179C437.053 449.179 436.09 450.455 436.09 452.028C436.09 453.601 437.053 454.877 438.24 454.877Z'
                            fill='#535461'
                        />
                        <path
                            d='M419.982 448.476C421.17 448.476 422.133 447.201 422.133 445.628C422.133 444.054 421.17 442.779 419.982 442.779C418.795 442.779 417.832 444.054 417.832 445.628C417.832 447.201 418.795 448.476 419.982 448.476Z'
                            fill='#535461'
                        />
                        <path
                            d='M426.898 448.716C428.107 448.716 429.087 447.417 429.087 445.816C429.087 444.215 428.107 442.917 426.898 442.917C425.689 442.917 424.71 444.215 424.71 445.816C424.71 447.417 425.689 448.716 426.898 448.716Z'
                            fill='#535461'
                        />
                        <path
                            d='M434.011 448.716C435.219 448.716 436.199 447.417 436.199 445.816C436.199 444.215 435.219 442.917 434.011 442.917C432.802 442.917 431.822 444.215 431.822 445.816C431.822 447.417 432.802 448.716 434.011 448.716Z'
                            fill='#535461'
                        />
                        <path
                            d='M441.463 448.476C442.65 448.476 443.613 447.201 443.613 445.628C443.613 444.054 442.65 442.779 441.463 442.779C440.275 442.779 439.312 444.054 439.312 445.628C439.312 447.201 440.275 448.476 441.463 448.476Z'
                            fill='#535461'
                        />
                        <path
                            d='M430.728 441.467C431.937 441.467 432.917 440.169 432.917 438.568C432.917 436.966 431.937 435.668 430.728 435.668C429.519 435.668 428.54 436.966 428.54 438.568C428.54 440.169 429.519 441.467 430.728 441.467Z'
                            fill='#535461'
                        />
                        <path
                            d='M438.388 441.467C439.596 441.467 440.576 440.169 440.576 438.568C440.576 436.966 439.596 435.668 438.388 435.668C437.179 435.668 436.199 436.966 436.199 438.568C436.199 440.169 437.179 441.467 438.388 441.467Z'
                            fill='#535461'
                        />
                        <path
                            d='M444.685 441.358C445.873 441.358 446.835 440.083 446.835 438.51C446.835 436.936 445.873 435.661 444.685 435.661C443.498 435.661 442.535 436.936 442.535 438.51C442.535 440.083 443.498 441.358 444.685 441.358Z'
                            fill='#535461'
                        />
                        <path
                            d='M349.48 343.266C348.468 343.268 347.498 343.801 346.782 344.749C346.066 345.697 345.664 346.983 345.663 348.323V363.546C345.664 364.887 346.066 366.172 346.782 367.12C347.498 368.068 348.468 368.602 349.48 368.603H352.216C353.228 368.602 354.198 368.068 354.914 367.12C355.629 366.172 356.032 364.887 356.033 363.546V348.323C356.032 346.983 355.629 345.697 354.914 344.749C354.198 343.801 353.228 343.268 352.216 343.266H349.48Z'
                            fill='#535461'
                        />
                        <path
                            d='M509.24 343.266C508.228 343.268 507.258 343.801 506.542 344.749C505.826 345.697 505.424 346.983 505.423 348.323V363.546C505.424 364.887 505.826 366.172 506.542 367.12C507.258 368.068 508.228 368.602 509.24 368.603H511.976C512.988 368.602 513.958 368.068 514.674 367.12C515.389 366.172 515.792 364.887 515.793 363.546V348.323C515.792 346.983 515.389 345.697 514.674 344.749C513.958 343.801 512.988 343.268 511.976 343.266H509.24Z'
                            fill='#535461'
                        />
                        <path
                            d='M554.925 387.103C562.177 387.103 568.056 379.314 568.056 369.707C568.056 360.099 562.177 352.31 554.925 352.31C547.673 352.31 541.794 360.099 541.794 369.707C541.794 379.314 547.673 387.103 554.925 387.103Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M527.022 424.071C534.274 424.071 540.153 416.282 540.153 406.674C540.153 397.066 534.274 389.278 527.022 389.278C519.77 389.278 513.891 397.066 513.891 406.674C513.891 416.282 519.77 424.071 527.022 424.071Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M583.923 421.896C591.175 421.896 597.054 414.107 597.054 404.5C597.054 394.892 591.175 387.103 583.923 387.103C576.671 387.103 570.792 394.892 570.792 404.5C570.792 414.107 576.671 421.896 583.923 421.896Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M557.114 460.313C564.366 460.313 570.245 452.525 570.245 442.917C570.245 433.309 564.366 425.52 557.114 425.52C549.862 425.52 543.983 433.309 543.983 442.917C543.983 452.525 549.862 460.313 557.114 460.313Z'
                            fill='#E6E6E6'
                        />
                        <path
                            d='M374.237 333.118C371.303 333.123 368.49 334.669 366.415 337.418C364.341 340.166 363.174 343.893 363.17 347.78V412.654C363.174 416.541 364.341 420.268 366.415 423.017C368.49 425.765 371.303 427.311 374.237 427.316H486.671C489.605 427.311 492.418 425.765 494.493 423.017C496.567 420.268 497.734 416.541 497.738 412.654V347.78C497.734 343.893 496.567 340.166 494.493 337.418C492.418 334.669 489.605 333.123 486.671 333.118H374.237Z'
                            fill='#535461'
                        />
                        <path
                            d='M563.846 377.68H546.04L554.636 358.157L563.846 377.68ZM547.945 376.23H561.871L554.668 360.961L547.945 376.23Z'
                            fill='#535461'
                        />
                        <path
                            d='M534.408 415.372H519.636V397.976H534.408V415.372ZM520.73 413.923H533.314V399.426H520.73V413.923Z'
                            fill='#535461'
                        />
                        <path
                            d='M583.923 415.372C582.3 415.372 580.713 414.735 579.363 413.54C578.014 412.345 576.962 410.647 576.341 408.66C575.72 406.674 575.557 404.488 575.874 402.378C576.19 400.269 576.972 398.332 578.12 396.811C579.268 395.291 580.73 394.255 582.322 393.836C583.914 393.416 585.564 393.632 587.064 394.454C588.563 395.277 589.845 396.671 590.747 398.459C591.648 400.247 592.13 402.349 592.13 404.5C592.127 407.382 591.262 410.146 589.723 412.184C588.185 414.223 586.099 415.369 583.923 415.372ZM583.923 395.076C582.516 395.076 581.141 395.629 579.971 396.664C578.802 397.7 577.89 399.172 577.352 400.893C576.813 402.615 576.673 404.51 576.947 406.338C577.221 408.166 577.899 409.845 578.894 411.163C579.888 412.481 581.156 413.378 582.535 413.742C583.915 414.105 585.345 413.919 586.645 413.205C587.945 412.492 589.055 411.284 589.837 409.735C590.618 408.185 591.036 406.363 591.036 404.5C591.033 402.001 590.283 399.606 588.95 397.84C587.617 396.073 585.809 395.079 583.923 395.076Z'
                            fill='#535461'
                        />
                        <path
                            d='M551.209 434.25L550.435 435.275L562.745 451.584L563.519 450.559L551.209 434.25Z'
                            fill='#535461'
                        />
                        <path
                            d='M563.027 434.237L550.444 450.186L551.201 451.234L563.783 435.285L563.027 434.237Z'
                            fill='#535461'
                        />
                        <path
                            d='M116.3 167.484C86.4272 178.395 53.715 186.608 41.9937 173.866C48.4112 159.712 52.1126 145.761 52.4266 132.063C52.4974 125.796 54.4134 119.813 57.766 115.391C59.9856 112.55 62.6647 110.417 65.5998 109.153C68.5349 107.89 71.6488 107.529 74.7049 108.099L82.4577 109.54C82.7186 109.588 82.9782 109.643 83.2365 109.705C86.9577 110.639 90.3647 113.094 92.9793 116.724C95.5938 120.354 97.2846 124.978 97.8143 129.946C99.4477 144.799 104.94 157.658 116.3 167.484Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M145.116 308.396L156.729 311.568C157.617 311.81 158.452 312.311 159.174 313.035C159.897 313.758 160.489 314.685 160.907 315.75C161.326 316.814 161.56 317.988 161.593 319.187C161.626 320.386 161.458 321.58 161.099 322.682V322.682C160.753 323.747 160.237 324.7 159.588 325.478C158.939 326.255 158.171 326.839 157.336 327.188C156.502 327.538 155.62 327.645 154.752 327.503C153.883 327.362 153.048 326.974 152.302 326.366L134.537 311.891L104.364 217.917L119.992 211.928L145.116 308.396Z'
                            fill='#A0616A'
                        />
                        <path
                            d='M62.3856 431.707L53.5922 435.095L46.936 416.884L53.7046 412.211L62.3856 431.707Z'
                            fill='#A0616A'
                        />
                        <path
                            d='M57.9178 509.738L47.1287 505.953L48.8177 481.396L58.1028 482.153L57.9178 509.738Z'
                            fill='#A0616A'
                        />
                        <path
                            d='M59.043 414.683L47.6158 424.646L3.66572 358.785C2.7124 357.356 2.00842 355.667 1.60387 353.837C1.19932 352.007 1.10414 350.081 1.3251 348.197C1.54606 346.313 2.07772 344.516 2.88227 342.935C3.68682 341.354 4.74449 340.027 5.98004 339.049L60.7309 295.707L69.1168 327.621L40.6078 363.065L59.043 414.683Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M68.6664 449.159C68.6378 449.208 68.609 449.257 68.5802 449.307C67.8499 454.972 66.5672 460.139 63.7027 463.881C62.8535 466.418 61.3286 468.452 59.4191 469.595C57.5097 470.737 55.3495 470.908 53.3511 470.074V470.074C51.4664 469.288 49.8464 467.659 48.7682 465.465C47.69 463.271 47.2206 460.65 47.4403 458.048L49.5756 432.762C54.6978 431.202 58.6044 427.343 60.5818 419.835L65.5599 424.327C67.033 425.646 68.2879 427.348 69.248 429.331C70.208 431.313 70.8531 433.534 71.1438 435.858C71.4345 438.182 71.3647 440.559 70.9388 442.846C70.5129 445.133 69.7397 447.281 68.6664 449.159V449.159Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M74.0835 162.069C83.7972 162.069 91.6717 151.636 91.6717 138.767C91.6717 125.898 83.7972 115.466 74.0835 115.466C64.3699 115.466 56.4954 125.898 56.4954 138.767C56.4954 151.636 64.3699 162.069 74.0835 162.069Z'
                            fill='#A0616A'
                        />
                        <path
                            d='M89.3149 176.017L61.5873 206.44L59.4277 193.917L64.2674 184.143C65.6105 174.554 64.7434 163.98 62.4355 152.763L80.5258 152.785C81.3068 161.849 83.9704 169.757 89.3149 176.017Z'
                            fill='#A0616A'
                        />
                        <path
                            d='M97.1214 255.821L59.6889 270.927L56.7767 253.289C49.7617 240.81 46.7123 229.421 51.3017 220.128L48.9922 206.14C55.6173 199.23 60.8271 192.159 63.6878 184.823L86.7186 172.9L103.649 174.28L108.649 196.477L97.1214 255.821Z'
                            fill='#564FCC'
                        />
                        <path
                            d='M123.715 214.41C115.735 214.298 107.926 217.468 101.364 223.483L103.649 174.28C105.969 174.691 108.168 175.894 110.03 177.772C111.891 179.65 113.352 182.137 114.268 184.99L123.715 214.41Z'
                            fill='#564FCC'
                        />
                        <path
                            d='M58.9259 488.031L47.0449 484.157L48.7937 350.411L64.7476 327.265L61.1763 297.922L58.8654 265.049L97.8356 252.247C111.008 283.934 118.969 312.742 107.348 330.738L58.9259 488.031Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M56.1969 533.188C56.1436 533.216 56.0902 533.243 56.0368 533.27C52.5869 538.577 48.7964 542.905 44.0308 544.426C41.9404 546.369 39.3833 547.223 36.8476 546.826C34.312 546.429 31.9755 544.809 30.2843 542.275V542.275C28.6894 539.884 27.7708 536.834 27.6857 533.646C27.6006 530.458 28.3542 527.33 29.8176 524.796L44.0419 500.172C50.1301 502.808 56.0396 502.032 61.6658 495.839L64.7327 504.674C65.6453 507.277 66.1479 510.1 66.2099 512.969C66.2718 515.838 65.8918 518.694 65.0931 521.363C64.2943 524.031 63.0935 526.456 61.564 528.489C60.0345 530.522 58.2083 532.121 56.1969 533.188V533.188Z'
                            fill='#2F2E41'
                        />
                        <path
                            d='M12.7954 324.483L2.36699 336.312C1.50161 337.293 0.837277 338.549 0.43559 339.961C0.0339031 341.373 -0.0921444 342.897 0.0691294 344.391C0.230403 345.885 0.673782 347.301 1.35816 348.508C2.04254 349.715 2.94578 350.673 3.98414 351.294V351.294C5.54729 352.228 7.32003 352.342 8.94398 351.612C10.5679 350.881 11.922 349.361 12.7323 347.358L20.2735 328.724L54.8571 245.112L41.8502 241.873L12.7954 324.483Z'
                            fill='#A0616A'
                        />
                        <path
                            d='M56.9412 247.461C50.1863 244.76 43.8589 243.169 38.9517 245.269C39.9803 228.404 42.1004 213.339 48.9922 206.14L58.7894 207.665L56.9412 247.461Z'
                            fill='#564FCC'
                        />
                        <path
                            d='M93.7182 133.364L56.1003 130.298L56.5633 120.33C69.6948 108.599 82.2341 109.622 94.1811 123.397L93.7182 133.364Z'
                            fill='#2F2E41'
                        />
                    </svg>
                </div>
            </section>
        </>
    );
}

export default Landing;