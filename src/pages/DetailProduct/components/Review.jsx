import Button from '../../../Components/Button/Button';
import FormItem from './FormItem';
import styles from '../style.module.scss';
function ReviewProduct() {
  const {
    containerReview,
    reviews,
    noReview,
    commentNotes,
    replyForm,
    commentReplyTitle,
    commentFormCookiesConsent,
    btnSubmit
  } = styles;
  return (
    <div className={containerReview}>
      <div className={reviews}>REVIEWS</div>

      <p className={noReview}>There are no reviews yet.</p>

      <div className={replyForm}>
        <div className={commentReplyTitle}>
          BE THE FIRST TO PREVIEW "10K YELLOW GOLD"
        </div>

        <p className={commentNotes}>
          Your email address will not be published. Required fields are marked.
        </p>

        <form action=''>
          <FormItem label={'Your rating'} isRequired typeChildren={'rating'} />

          <FormItem
            label={'Your review'}
            isRequired
            typeChildren={'textarea'}
          />

          <FormItem label={'Name'} isRequired typeChildren={'input'} />

          <FormItem label={'Email'} isRequired typeChildren={'input'} />
          <div className={commentFormCookiesConsent}>
            <input type='checkbox' name='' id='' />
            <span>
              Save my name, email, and website in this browser for the next tim
              I comment.
            </span>
          </div>

          <div className={btnSubmit}>
            <Button content={'SUBMIT'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewProduct;
