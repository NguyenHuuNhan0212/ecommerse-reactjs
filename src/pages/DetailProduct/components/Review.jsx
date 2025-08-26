import Button from '../../../Components/Button/Button';

function ReviewProduct() {
  return (
    <div>
      <div>REVIEWS</div>

      <p>There are no reviews yet.</p>

      <div>BE THE FIRST TO PREVIEW "10K YELLOW GOLD"</div>

      <p>
        Your email address will not be published. Required fields are marked.
      </p>

      <label>
        Your rating <span>*</span>
      </label>

      <div>sao</div>

      <label>
        Your review <span>*</span>
      </label>
      <textarea rows='10'> </textarea>

      <label htmlFor=''>
        Name <span>*</span>
      </label>
      <input type='text' name='' id='' />

      <label htmlFor=''>Email</label>
      <input type='email' name='' id='' />

      <div>
        <input type='checkbox' name='' id='' />
        <p>
          Save my name, email, and website in this browser for the next tim I
          comment.
        </p>
      </div>

      <Button content={'SUBMIT'} />
    </div>
  );
}

export default ReviewProduct;
