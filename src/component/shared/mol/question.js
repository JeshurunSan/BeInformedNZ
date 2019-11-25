import React from "react";
import '../../../css/shared/mol/question.css';

const Question = () => {
  return (
    <div className="Question">
      <div className="qanda-header">
        <div className="qanda-author-icon"></div>
        <div className="qanda-header-text">
          <div className="qanda-question-title">Title of the question?</div>
          <div className="qanda-author">John Smith</div>
        </div>
      </div>
      <div className="qanda-question-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
        sagittis ipsum. Suspendisse congue semper mattis. Praesent quis diam ac
        elit volutpat semper. Quisque eget urna id ligula mattis rhoncus ac quis
        tellus. Praesent bibendum, ante quis aliquet luctus, metus justo
        eleifend ex, sed dignissim elit felis ac felis.
      </div>
      <div className="qanda-widgets">
        <button>Report</button>
        <button>Share</button>
      </div>
      <div className="qanda-image"><p>Image</p></div>
      <div className="qanda-answer">
        <b>Answer</b><br/>
        <br/>Nam placerat, augue at viverra eleifend, felis lorem congue nisi, id
        vestibulum magna felis ut mi. Phasellus in erat eu leo hendrerit
        ultricies. Mauris pulvinar pretium mauris eget eleifend. In egestas, mi
        sagittis condimentum iaculis, urna tellus maximus justo, congue
        ultricies quam diam et sem. Aliquam vel odio non ex vehicula mattis eget
        eget elit. Integer fermentum nisi sit amet nisl tincidunt, ut dictum
        lectus auctor. In hac habitasse platea dictumst. Donec orci nunc,
        imperdiet euismod est quis, efficitur egestas metus. Donec a venenatis
        dolor. Vestibulum scelerisque elementum condimentum. Phasellus vitae
        aliquam dui, vel mollis diam. Ut et dignissim magna, in accumsan turpis.
        Etiam tincidunt ante at eros condimentum suscipit. Suspendisse potenti.
      </div>
    </div>
  );
};

export default Question;
