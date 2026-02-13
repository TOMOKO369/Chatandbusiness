const translations = {
    jp: {
        mode_chat: "雑談 (Chat)",
        mode_business: "ビジネス (Business)",
        profile_name: "My Profile",
        profile_role: "Freelance Creator / Instructor",
        chat_intro_title: "転んだ数だけ、強くなる。<br>私の人生、ノンストップ生中継！",
        chat_audio_title: "音声配信を聴く",
        chat_video_title: "動画を観る",
        chat_link_btn: "AIで作った成果物一覧＆自己紹介はこちら",
        business_intro_title: "「できない」は、「できる」ようになるための予兆です。",
        business_intro_desc: "ひとりで悩む時間は、もう終わり。<br>あなたの「やりたい」に寄り添い、一番近くで励まし続けるマンツーマン・オンラインレッスン。",
        business_sub_msg: "パソコンが苦手なあなたを、ビジネスの主役へ。<br>初心者目線の動画と、心に寄り添う個別指導で、<br>「わからない」が「できる！」に変わる喜びを。",
        business_audio_title: "【ビジネス配信】知識を力に、明日を動かす",
        business_audio_desc: "あなたのビジネスを加速させる、実践的なヒントをお届けします。",
        business_video_title: "【初心者向け動画】「わからない」をゼロにする",
        business_video_desc: "つまずきやすいポイントを丁寧に解説。パソコン初心者の方でも安心して、自分のペースで学べます。",
        business_appearance_title: "出演情報",
        business_appearance_btn: "出演情報はこちら (YouTube)",
        business_link_btn: "AIで作った成果物一覧＆自己紹介はこちら"
    },
    en: {
        mode_chat: "Chat",
        mode_business: "Business",
        profile_name: "My Profile",
        profile_role: "Freelance Creator / Instructor",
        chat_intro_title: "Stronger with every fall.<br>My life, broadcast non-stop!",
        chat_audio_title: "Listen to Audio Podcast",
        chat_video_title: "Watch Video",
        chat_link_btn: "AI Deliverables & Self-Intro",
        business_intro_title: "\"I can't\" is just a sign that you will soon be able to.",
        business_intro_desc: "No more worrying alone.<br>I offer one-on-one online lessons to support your goals and encourage you every step of the way.",
        business_sub_msg: "Turning computer struggles into business strengths.<br>With beginner-friendly videos and personalized guidance,<br>Experience the joy of turning \"I don't know\" into \"I can do it!\"",
        business_audio_title: "[Business Audio] Knowledge is Power",
        business_audio_desc: "Practical tips to accelerate your business growth.",
        business_video_title: "[Beginner Video] Making \"Unknowns\" Zero",
        business_video_desc: "Carefully explaining stumbling blocks. Even beginners can learn at their own pace with confidence.",
        business_appearance_title: "Appearance Info",
        business_appearance_btn: "Click here for Appearances (YouTube)",
        business_link_btn: "AI Deliverables & Self-Intro"
    },
    ca: {
        mode_chat: "杂谈 (Chat)",
        mode_business: "商务 (Business)",
        profile_name: "我的简介",
        profile_role: "自由创作者 / 讲师",
        chat_intro_title: "跌倒越多越强大。<br>我的人生，全程直播！",
        chat_audio_title: "收听音频播客",
        chat_video_title: "观看视频",
        chat_link_btn: "AI作品集与自我介绍",
        business_intro_title: "“不会”是“学会”的预兆。",
        business_intro_desc: "独自烦恼的时间已经结束。<br>提供一对一在线课程，贴近你的愿望，在最近的地方不断鼓励你。",
        business_sub_msg: "让不擅长电脑的你成为职场主角。<br>通过初学者视角的视频和贴心的个性化指导，<br>体验将“不懂”变为“会做”的喜悦。",
        business_audio_title: "【商务音频】知识就是力量，驱动明天",
        business_audio_desc: "为您提供加速业务发展的实用技巧。",
        business_video_title: "【初学者视频】将“不懂”变为零",
        business_video_desc: "详细讲解容易受挫的要点。电脑初学者也能按照自己的节奏放心学习。",
        business_appearance_title: "出演信息",
        business_appearance_btn: "点击查看出演信息 (YouTube)",
        business_link_btn: "AI作品集与自我介绍"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // Use innerHTML to support <br>
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const chatContent = document.getElementById('chat-content');
    const businessContent = document.getElementById('business-content');

    // Function to update the UI based on the toggle state
    function updateMode() {
        if (modeToggle.checked) {
            // Business Mode
            body.classList.remove('mode-chat');
            body.classList.add('mode-business');

            chatContent.classList.remove('active');
            setTimeout(() => {
                chatContent.style.display = 'none';
                businessContent.style.display = 'block';
                setTimeout(() => businessContent.classList.add('active'), 10);
            }, 300);

        } else {
            // Chat Mode
            body.classList.remove('mode-business');
            body.classList.add('mode-chat');

            businessContent.classList.remove('active');
            setTimeout(() => {
                businessContent.style.display = 'none';
                chatContent.style.display = 'block';
                setTimeout(() => chatContent.classList.add('active'), 10);
            }, 300);
        }
    }

    // Initial check
    if (modeToggle.checked) {
        body.classList.add('mode-business'); // Ensure class matches state
        body.classList.remove('mode-chat');
        chatContent.style.display = 'none';
        businessContent.style.display = 'block';
        businessContent.classList.add('active');
    } else {
        body.classList.add('mode-chat');
        body.classList.remove('mode-business');
        businessContent.style.display = 'none';
        chatContent.style.display = 'block';
        chatContent.classList.add('active');
    }

    // Event Listener
    modeToggle.addEventListener('change', updateMode);

    // Send Discord Webhook Notification on Load
    const webhookUrl = 'https://discord.com/api/webhooks/1471822747784183863/OwGx4iBo9vKZ10nbHPIgzuCzZGP-MKSgSWWceJ3ekaqjlM2MFjfv1KkanWXuu8Ugh45y';

    // Check if we've already sent a notification this session to avoid spam on reload (Optional, but good practice)
    if (!sessionStorage.getItem('notified')) {
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: "Someone visited your Self Introduction page! 🎉"
            }),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Notification sent!');
                    sessionStorage.setItem('notified', 'true');
                } else {
                    console.error('Failed to send notification:', response.status);
                }
            })
            .catch(error => console.error('Error sending notification (CORS restriction may apply):', error));
    }
});
