function Navbar() {
	return (
		<nav className="mainnav">
		<ul>	
		<a href="index.html"><img id="logo" src ="logo/logo.png" align="left" height="50px"/></a>
		<a id="navelement" href="https://www.tsugicloud.org/tsugi/store/">Appstore</a>
		<a id="navelement" href="privacy.html">Policies</a>
		<a id="navelement" href="howto.html">Docs</a>
		</ul>
		</nav>
		)
} 

function Banner() {
	return (
		<div className="banner">
		<img src ="logo/TsugiCloud.org/tsugicloud-org_gravatar.png" width="300px"/>	
		<h1 id="bannerh1">TsugiCloud <br></br>for Education Lovers</h1>
		<p id="bannerp">Tsugi enables you to quickly build learning tools and integrate them into any learning management 
			system. We already built it brick by brick so that you can use it readily and on the go.
		</p>
		<a href="howto.html"><button id="bannerbutton1"><b>Get Started</b></button></a><a href="privacy.html"> <button id="bannerbutton2"><b>Policies</b></button></a>
		</div>
	)
} 

function Flex() {
	return (
		<div className="flex">
			<img src ="flex/nswcc.png" height="60px"/ >
			<img src ="flex/Pepperdine_University_seal.svg" height="60px"/>
			<img src ="flex/download.png" height="60px"/>
			<img src ="flex/University_of_Dayton.svg" height="60px"/>
			<img src ="flex/wlu.png" height="60px"/>
			<img src ="flex/wu.png" height="60px"/>
			<img src ="flex/marist.png" height="60px"/>
			<img src ="flex/16105549_10156181301919572_4436690267435604647_n.jpg" height="60px"/>

		</div>
	)
}

function Division1() {
	return (
		<div className="division1">
			<div>
				<h1>An app store for Education </h1>
				<p>With more than 20+ free tools optimized for productivity, TsugiCloud
					will be your companion more often than not.
				</p>
					<a href="https://www.tsugicloud.org/tsugi/store/" target="blank"> <button id="bannerbutton2"><b>Tsugi Store</b></button></a>	
			</div>
			<div>
				<img id="division1img" src="flex/div1.png" width="600px" ></img>
			</div>
		</div>
	)
}

function Division2() {
	return (
		<div className="division2">
			<div>
				<img src="flex/baf6bdcd38204f820ed2eca5947823e1.svg" height="400px"></img>
			</div>
			<div>
				<h1>Free Hosting </h1>
				<p>TsugiCloud provides socially responsible free hosting of open source Tsugi tools that are developed as part of the Tsugi project.</p>
			</div>
		</div>
	)
}

function Division3() {
	return (
		<div className="division3">
			<div>
				<h1>Teachers & Learners</h1>
				<p>Teachers and Learners have access to a wide range of tools to improve the overall user experience in their courses.</p>
			</div>
			<div>
				<img id="division3img" src="flex/Virtual-ClassroomHow-.jpg" ></img>
			</div>
		</div>
	)
}

function Division4() {
	return (
		<div className="division4">
			<div>
				<img id="division3img" src="flex/154-1545805_portfolio-icons-code-web-development-logo.png" width="500px" ></img>
			</div>
			<div>
				<h1>Developers</h1>
				<p>Developers can build open source Tsugi tools as part of the Apereo Project and submit them to be hosted on this service.</p>
			</div>
		</div>
	)
}

function Division5() {
	return (
		<div className="division5">
			<div>
				<h1>IT Staff</h1>
				<p>The tools on this server can be integrated as an App Store into an LMS that supports the IMS Content Item Message standard or Google Classroom. Also, Tsugi and the Tsugi Tools project are all 100% open source so a school has the option to host their own independent instance of a Tsugi App Store.</p>
			</div>
			<div>
				<img id="division3img" src="flex/sdSHp2akMYc4EoZAoRE77k-1200-80.jpg" width="600px" ></img>
			</div>
		</div>
	)
}

function Division6() {
	return (
		<div className="division6">
			<div>
				<img id="division3img" src="flex/big-blue-whale-vector.jpg" width="800px"></img>
			</div>
			<div>
				<h1>Commercial Hosting</h1>
				<p>Learning Experiences provides the resources this site is free to use. You can purchase commercial hosting for Tsugi from Learning Experiences.</p>
			</div>

		</div>
	)
}

function Testimonial() {
	return (<div className="testimonial">
		<h1>Loved by all</h1>
		<img src ="flex/testimony.gif" />	
		
	</div>)
}

function Community() {
	return (
	<div className="community">
		<div>
			<h1>Together we can do so much</h1>
			<p>TsugiCloud is for everyone. Whether you are an instructor, business leader or community manager. For
				those who never cease to follow their dreams. TsugiCloud is 100% free & believes absolutely open source.</p>
				<a href="https://github.com/tsugiproject/tsugi" target="_blank"><button id="bannerbutton1"><img src="flex/github-mark.png" height="15px"></img> <b>Contribute</b></button></a>	
		</div>
		<div>
		<img src="logo/b96521d07ec01801331b4eec8d399c84f2131050.png" width="800px"></img>
		</div>
	</div>		
	)
}

function Sidebar() {
	return (
		<nav className="sidebar">
			<h1>Using Tsugi</h1>
			<ul>
				<li><a href="#canvas">Canvas</a></li>
				<li><a href="#clasroom">Google</a></li>
				<li><a href="#sakai">Sakai</a></li>
				<li><a href="#blackboard">Blackboard</a></li>
				<li><a href="#brightspace">Brightspace</a></li>
			</ul>
		</nav>
	)
}

function Canvas() {
	return(
		<div className="canvas">
		<img src="logos/Canvas-Logo.png" width="40px" align="left"></img>
		<h1 id="canvas">Canvas Integration</h1>	
		<p>	You can view, install, and use TsugiCloud in the EduAppCenter at: </p>
		<p><code>https://www.eduappcenter.com/apps/1010</code></p>
		<h1>Using TsugiCloud in Canvas</h1>
		<p>There are several different use cases for using TsugiCloud in Canvas. In all cases you will need a Key and Secret.</p>
			<ol>
			<li>Go to the App Store and login with your Google Account</li>
			<li>Go to the Settings and select "Manage LMS Access Keys". Request an LTI 1.x key and wait for the email approving the key and giving your key and secret. Keep these safe.</li>
			</ol>
			
		<p>
		You can either install tools into Canvas one at a time, or install the entire TsugiCloud app store into Canvas in a single step. Depending on your local configuration, you may or may not need to get your Canvas adminstrator to install these tools.
		</p>	
		<p>
		If you are a Canvas administrator, you can install either a single tool or the entire store for your users using these same URLs. You only need one key and secret for an entire Canvas installation and the users never need to see their key and secret when the tools are installed by the Canvas adminstrator.
		</p>
		<h2>Using a Single Tool in Canvas</h2>
	
		<ol>
			<li>Go to the Tsugi App Store. Find the application you want to install and go to the Details page. If you click on "Tool URLs" you will be given a Canvas configuration URL (ends with ".xml"). Copy the URL that looks as follows:<br></br>https://www.tsugicloud.org/mod/map/canvas-config.xml</li>
			<li>Go into a Canvas course, and select "Settings", "Apps", "View App Configurations", and "+ App". Under Configuration Type, select "By URL". Enter the configuration URL, Key, and Secret and give the tool a name and save the configuration. This tool will now be avaialable as one of the "External Tools" thoughout the Canvas UI.</li>
			</ol>
		
		<h2>Installing TsugiCloud as an App Store in Canvas</h2>
		<p>You can install TsugiCloud as a searchable "Store" inside of Canvas with a single key and secret and then you can easily pull in any of the tools at various points in the Canvas UI.</p>
		
		<ol>
			<li>Go to your Tsugi Settings and select "Manage LMS Keys" and then "Using Your Key" and then "Canvas". You should copy the URL that looks like:<br></br>https://www.tsugicloud.org/tsugi/lti/store/canvas-config.xml</li>
			<li>Go into a Canvas course, and select "Settings", "Apps", "View App Configurations", and "+ App". Under Configuration Type, select "By URL". Enter the configuration URL, Key, and Secret and give the tool a name and save the configuration. The tools in this site will now be avaialable as a searchable course in the the "External Tools" options in the Canvas UI.</li>
			</ol>
		
		<p>These tools will appear under Modules, Assignments, and even in the rich text editor when installed in this manner.</p>
		</div>
	)

}

function Classroom() {
	return (
		<div className="classroom">
		<img src="logos/Google_Classroom_Logo.png" width="40px" align="left"></img>
		<h1 id="clasroom">Google Classroom Integration</h1>
		<h2>Using TsugiCloud in Google Classroom</h2>
		<p>It is relatively simple to use TsugiCloud in Google Classroom.</p>
		<ol>
			<li>Go to the App Store and login with your Google Account</li>
			<li>From Settings, connect your Google account on TsugiCloud to your Google Classroom</li>
			<li>Then go to the Tsugi App Store - at that point, if you have successfully connected to one or more Google Classrooms, you should see the Google Classroom icon next to each of the applications in the store.</li>
			<li>When you click on the Google Classroom icon <img src="https://www.gstatic.com/classroom/logo_square_48.svg" height="20px"></img> you will be prompted for a Google Classroom course to install the tool.</li>
			<li>Once you install a tool, it should appear in your Classroom "wall". Launch the tool as the instructor to see if the tool needs any post-install configuration.</li>
			<li>Once the tools is installed and configured, students can launch the tool. If the tool produces grades they will be sent back to the Classroom grade book. Note that you need a student account to test grades going back to Classroom. Grades do not flow for Instructors.</li>
		</ol>
		<p>If you want to experiment with this, you need two @gmail.com accounts - one to be the teacher and one to be the student. Simply go to classroom.google.com and create a course on the teacher account and invite your other gmail account to the course. You can install tools on the teacher account and get graded from the student account.</p>
		<p>You may or may not be able to use Classroom from an "enterprise" Google account. Your GSuite adminstrator must explicitly allow a domain to use Google Classroom.</p>
		<video id="v2"controls width="560px" height="315px">
		<source src="video/Using the Tsugi Cloud App Store Applications in Google Classroom.mp4" type="video/mp4"></source>
		</video>
		</div>
		
	)

}

function Sakai() {
	return(
		<div className="sakai">
		<h1>Get started with TsugiCloud</h1>	
		<p>TsugiCloud is a powerful, simple yet feature-packed Framework with LTI Interoperability. Integrate anything—from prototype to production—in minutes.</p>	
		<img src="logos/sakai logo_edited.png" height="48px" align="left"></img>	
		<h1 id="sakai">Integration</h1>
		<h2>Using TsugiCloud in Sakai</h2>
		<p>There are several different use cases for using TsugiCloud in Sakai. In all cases you will need a Key and Secret.</p>
		<ol>
			<li>Go to the App Store and login with your Google Account</li>
			<li>Go to the Settings and select "Manage LMS Access Keys". Request an LTI 1.x key and wait for the email approving the key and giving your key and secret. Keep these safe.</li>
		</ol>
		<p>You can either install tools into Sakai one at a time, or install the entire TsugiCloud app store into Sakai in a single step. Depending on your local configuration, you may or may not need to get your Sakai adminstrator to install these tools.</p>
		<p>If you are a Sakai administrator, you can install either a single tool or the entire store for your users using these same URLs. You only need one key and secret for an entire Sakai installation and the users never need to see their key and secret when the tools are installed by the Sakai adminstrator.</p>
		<h2>Using a Single Tool in Sakai</h2>
		<ol>
			<li>Go to the Tsugi App Store. Find the application you want to install and go to the Details page. If you click on "Tool URLs" you will be given an LTI 1.x launch url to copy that looks as follows:<br></br>https://www.tsugicloud.org/mod/map/</li>
			<li>Sakai supports several ways of installing external tools. You can either go to Lessons / External Tools or Site Info / External tools and add an LTI 1.x tool. Enter the key, secret, and launch URL and fill in the rest of the fields.</li>
		</ol>
		<h2>Installing TsugiCloud as an App Store in Sakai</h2>
		<p>Sakai 10 and later supports the IMS Content Item standard so you can install this site as an "App Store" / "Learning Object Repository" using this url and your key and secret:</p>
		<p>https://www.tsugicloud.org/tsugi/lti/store/</p>
		<p>In Sakai, use the Lessons tool, select "External Tools" and install this as an LTI 1.x tool. Make sure to check the "Supports Content Item" option when installing this URL in Sakai and tick the boxes to allow both the title and url to be changed.</p>
		<p>Then this "TsugiCloud store" will appear in Lessons as a new external tool, when you select the store you will be launched into the picker to choose tools and/or resources to be pulled into Lessons. The key and secret will be inherited from the store to each of the installed tools. In Sakai-12, once the app store is installed, the rerources from this site will also be avilable from within the rich text editor.</p>
		<video id="v1" controls width="560px" height="315px">
		<source src="video/Using the Tsugi Cloud App Store Applications in Sakai.mp4" type="video/mp4"></source>
		</video>
		</div>
	)
}

function Blackboard() {
	return(
		<div className="blackboard">
		<img src="logos/Blackboard_Inc._logo.png" width="40px" align="left"></img>	
		<h1 id="blackboard">Blackboard Integration</h1>
		<h2>Using TsugiCloud in Blackboard Learn</h2>
		<p>There are several different use cases for using TsugiCloud in Learn. In all cases you will need a Key and Secret.</p>
		<ol>
			<li>Go to the App Store and login with your Google Account</li>
			<li>Go to the Settings and select "Manage LMS Access Keys". Request an LTI 1.x key and wait for the email approving the key and giving your key and secret. Keep these safe.</li>

		</ol>
		<p>You can either install tools into Sakai one at a time, or install the entire TsugiCloud app store into Learn in a single step. Depending on your local configuration, you may or may not need to get your Learn adminstrator to install these tools.</p>
		<p>If you are a Learn administrator, you can install either a single tool or the entire store for your users using these same URLs. You only need one key and secret for an entire Learn installation and the users never need to see their key and secret when the tools are installed by the Learn adminstrator.</p>
		<h2>Instructor Using a Single Tool in Learn</h2>
		<ol>
			<li>Go to the Tsugi App Store. Find the application you want to install and go to the Details page. If you click on "Tool URLs" you will be given an LTI 1.x launch url to copy that looks as follows:<br></br>https://www.tsugicloud.org/mod/map/</li>
			<li>Learn requires that an adminstrator set up the use of LTI for a particular domain. To do this, log in as an Administrator, go to "Administrator Panel" and select "LTI Tool Providers" and then "Register Provider Domain". There are a number of options including whether to use one shared key and secret or have each instructor enter their own key or secret. They also set what user data (name / email / role) is shared with the tool as well as deciding whether the tool will be allowed to use the membership service.</li>
			<li>Once things are set up, the simplest way for an instructor to install an LTI tool in Learn is to go to Content/Build Content/Web Link. Give your link a name and a URL and check the box "This link is to a Tool Provider". If Learn displays a message like, "This tool provider is not supported. Only standard URL links to this site are permitted.", you will need to talk to your administrator to get the tsugicloud.org domain installed in Learn (see previous step). Depending on the configuration of the domain, you may or may not need to enter a key and secret in the link.</li>
		</ol>
		<h2>Installing TsugiCloud as an App Store in Learn</h2>
		<p>Learn Release 3300 and later supports the IMS Content Item standard so you can install this site as an "App Store" / "Learning Object Repository" using this url and your key and secret:</p>
		<p>https://www.tsugicloud.org/tsugi/lti/store/</p>
		<ol>
			<li>In the Administrator panel, make sure that LTI is enabled. go to "Administrator Panel" and select "Tools". Make sure that under "LTI" you enable "Course Tool", "Orbganization Tool", and "Content Type" as apporpriate.</li>
			<li>In the Administrator panel, go to "Administrator Panel" and select "LTI Tool Providers" and then "Register Provider Domain". Register the domain "www.tsugicloud.org". There are a number of options including whether to use one shared key and secret or have each instructor enter their own key or secret. They also set what user data (Name / email / role) is shared with the tool as well as deciding whether the tool will be allowed to use the membership service.</li>
			<li>Still as the Administrator, Once the item has been created, open the the drop down by the domain name in the "LTI Tool Provider" and select "Manage Placements". Then select "Create Placement". Enter a title, the store URL above, key and secret and fill in the fields and in particular check the box that says "Supports deep linking" and "Allows grading". And save the placement.</li>
			<li>Then as the instructor, when you go to Content/Build Content, you will see the newly installed placement as one of the selectable items with whatever title you gave the placement. Select the "App Store" (placement title) link, you will be launched directly into the Tsugi store selector, select your tool, and press "Install" and the LTI will be installed into the content ares of your course. No further configuration is necessary.</li>
		</ol>
		<p>The "App Store" / "Content Item" / "Deep Linking" features are an extension to LTI 1.1. They do not require LTI 2.0. Learn supports LTI 2.0 and so does TsugiCloud, but ContentItem is generally preferred over LTI 2.0.</p>
		<video id="v3" controls width="560px" height="315px">
		<source src="video/Using the Tsugi Cloud App Store Applications in Blackboard Learn.mp4" type="video/mp4"></source>
		</video>
		</div>
	)
}

function Brightspace() {
	return(
		<div className="brightspace">
		<img src="logos/brightspace.png" width="40px" align="left"></img>	
		<h1 id="brightspace">Brightspace Integration</h1>
		<h2>Using TsugiCloud in Brightspace</h2>
		<ol>
			<li>Go to the TsugiCloud App Store and login with your Google Account</li>
			<li>Go to the Settings and select "Manage LMS Access Keys". Request an LTI 1.x key and wait for the email approving the key and giving your key and secret. Keep these safe.</li>
		</ol>
		<p>Brightspace supports the IMS Content Item standard so you can install this site as an "App Store" / "Learning Object Repository" using this url and your key and secret:</p>
		<p>https://www.tsugicloud.org/tsugi/lti/store/</p>
		<p>The documentation to install a tool in Brightspace and enabing Content Item support is:</p>
		<p><a href="https://documentation.brightspace.com/EN/le/lti/admin/adding_content_item_messagel_certified_third_party_tool.htm" target="_blank">https://documentation.brightspace.com/EN/le/lti/admin/adding_content_item_messagel_certified_third_party_tool.htm</a></p>
		</div>
	)
}

function FAQ() {
	return (
		<div className="faq">
			<h1>Frequently Asked Questions</h1>
			<h2>a.How would a teacher use TsugiCloud?</h2>
			<p>Most Learning Management Systems (LMS) support the IMS Learning Tools Interoperability® (LTI) specification. To integrate a tool, you need to apply for a key and secret in the App Store. When you receive your key and secret, you can visit the app store and get the launch URL to plug the tool into your LMS.</p>
			<p>If you use Google Classroom, go into the App Store and connect your Classrooms to this store. At that point, you can immediately install Apps into Google Classroom. Google Classroom will be able to launch the apps and the apps will be able to send grades to Google Classroom for your students.</p>
			<h2>b.I am a campus IT staff member, can we use TsugiCloud?</h2>
			<p>Yes, most LMS's like Sakai, Canvas, Blackboard, Moodle, or Brightspace allow an administrator to install an LTI tool for all users. If your LMS supports IMS Content Item (a.k.a. IMS Deep Linking) it is possible to install the app store into your LMS once and users can convienently select items from this store and install them using the system-wide key and secret. Look for the "System-wide URLs" in the App Store or in the "Using Your Key" area under Settings.</p>
			<h2>c.Can I test these tools with 12345/secret</h2>
			<p>Yes you can. You should never use this key and secret in production. All the data associated with 12345/secret is thrown away periodically. Using a commonly known test key/secret exposes any data stored under that key. So 12345/secret is perfect for testing but very bad for production.</p>
			<h2>d.Can I pay for TsugiCloud?</h2>
			<p>No. This is and will continue to be a free service. If you want to support the effort, please join and/or donate to <a href="https://www.apereo.org/" target="_blank">Apereo</a> and support the Tsugi project. You can purchase hosting for Tsugi tools from <a href="https://www.learnxp.com/" target="_blank">Learning Experiences</a>. Learning Experiences is a <a href="https://www.apereo.org/content/commercial-affiliates" target="_blank">Tsugi Commercial Affialiate.</a></p>
			<h2>e.Can I build my own educational tool like these tools?</h2>
			<p>These tools are all built using a free and 100% open source framework called Tsugi. The Tsugi web site has details on how to get started developing educational tools using Tsugi.</p>
			<h2>How do I submit a tool I have written to host it on TsugiCloud?</h2>
			<p>This site only hosts tools that are open source and accepted as part of the <a href="https://github.com/tsugitools" target="_blank">Tsugi Tools</a> project in Apereo. If you have a Tsugi tool, you need to move the source code into this project, and get all the intellectual property cleared using <a href="https://www.apereo.org/licensing/agreements" target="_blank"> Apereo Contributor License Agreements.</a> Once that is done and the code has passed code review, it will be added to this site for free hosting. If you want a place to stage your Tsugi tools in public but without the licensing rigor of the Tsugi Tools organization, you can use the <a href="https://github.com/tsugicontrib" target="_blank">Tsugi Contrib</a> area but those tools are not eligible for hosting on TsugiCloud.org.</p>
		</div>
	)

}

function Privacy() {
	return (
		<div className="privacy">
		<h1>Privacy</h1>
		<p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
		<h2>What personal information do we collect from the people that visit our blog, website or app?</h2>
		<p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address or other details to help you with your experience.</p>
		<h2>When do we collect information?</h2>
		<p>We may use the information we collect from you when you register, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features.</p>
		<h2>How do we protect your information?</h2>
		<p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
		<h2>Do we use 'cookies'?</h2>
		<p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.</p>
		<h2>We use cookies to:</h2>
		<p>Understand and save user's preferences and identity for future visits.</p>
		<p>Gather analytics data that is only used to monitor and improve the site.</p>
		<p>Many of the learning applications hosted on these systems are designed to neither use nor require cookies and will have full function even when cookies are turned off when the application is launched from a Learning Management System.</p>
		<h2>If users disable cookies in their browser:</h2>
		<p>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.</p>
		<h2>Third-party disclosure</h2>
		<p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>
		<h2>Third-party links</h2>
		<p>We do not include or offer third-party products or services on our website.</p>
		<h2>Advertising</h2>
		<p>We do no third-party advertising on this site.</p>
		<h2>Google Analytics</h2>
		<p>We use Google analytics to track usage and improve the site.</p>
		<p>Google, as a third-party vendor, uses cookies to support analytics on our site. Users may opt-out of the use of the DART cookie by using the Google-provided opt-out capabilities. If users opt-out of Google Analytics on this site, there is no reduction in functionality of this site.</p>
		<h2>How does our site handle Do Not Track signals?</h2>
		<p>We honor Do Not Track signals. When DNT is indicated, we supress the gathering of all internal analytics data and do not use any third part analytics on the pages the user visits. We never show ads.</p>
		<h2>COPPA (Children Online Privacy Protection Act)</h2>
		<p>We do not specifically market to children under the age of 13 years old.</p>
		<h2>Data Retention</h2>
		<p>We actively expire inactive data based on a schedule. When data expires or is manually removed, this service does not retain a copy of the data. By only keeping active data in the system, we reduce the overall amount of 'Personally Identifiable Information' (PII) on the system at any time.</p>
		<h2>Data Analysis</h2>
		<p>We will limit our analysis of PII data to reports requested by the customer or reports that are necessary for accounting, technical support, and overall statistics for the system. We may do internal data analysis to improve the technical reliability, functionality, or performance of the system. In particular we will not use Machine Learning, or Artificial Intelligence techniques to understand the behavior of those using our site.</p>
		<h2>General Philosphy</h2>
		<p>It is often said that if you are not paying for a service, then you are the product. For this service, you are not the product and your data/activity is not the product. We retain only as much of your data as is needed to accomplish your teaching and learning goals and for no other purpose. Wherever possible, we give you direct control over the retention of your data and respect your wishes with respect to the retention of your data.</p>
		<p>Our goal is to comply both with the letter and spirit or privacy laws like the The Family Educational Rights and Privacy Act (FERPA) and EU General Data Protection Regulation (GDPR) regulations. We aspire to a company that far exceeds the minimum requirements of these laws.</p>
		<p>Much of the software used in this company is open source so you can examine/audit what we are doing with respect to privacy and potentially help us improve our approaches to this very important topic.</p>
		<h2>Notifications</h2>
		<p>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify you via email</p>
		<p>If there are any questions regarding this privacy policy, you may contact us using the information below.</p>
		<pre><code>TsugiCloud (tsugicloud.org)<br></br>
1537 Holbrook Drive<br></br>
Holt, Michigan 48842<br></br>
United States</code></pre>
		<h1>Data Retention</h1>
		<p>This service does not want to retain your learning data forever. When a course has been inactive for at least six months, its data will be removed after the owner of the data has been notified as long as we have an email address for the data owner. This service is not intended for long-term archival of student data.</p>
		<h1>Service Level</h1>
		<p>This is a highly reliable scalable cloud-based service, but outages may occur. But since there are no fees for this service, there is no formal service level agreement for this service. If you are having issues with the performance or reliability of this site, please <a href="../contact.php" target="_blank">contact us</a>.</p>
		</div>
	)
}



function Footer() {
	return (
		<div className="footer">
		<div>
		<img src ="logo/TsugiCloud.org/tsugicloud-org_gravatar_72.png"/>
		</div>	
		<div>
		<ul>	
		<li><b>Links</b></li>
		<li><a href="index.html">Home</a></li>
		<li><a href="howto.html">Docs</a></li>
		<li><a href="faq.html">FAQ</a></li>
		<li><a href="privacy.html">Privacy</a></li>	
		<li><a href="contact.php">Contact</a></li>
		<li><a href="https://www.tsugicloud.org/tsugi/store/">Appstore</a></li>				
		</ul>	
		</div>
		</div>)
}

const container = document.getElementById("footer")
const root = ReactDOM.createRoot(container)
root.render(<Footer/>)


ReactDOM.createRoot(document.getElementById("nav")).render(<Navbar/>)
ReactDOM.createRoot(document.getElementById("banner")).render(<Banner/>)
ReactDOM.createRoot(document.getElementById("flex")).render(<Flex/>)
ReactDOM.createRoot(document.getElementById("division1")).render(<Division1/>)
ReactDOM.createRoot(document.getElementById("division2")).render(<Division2/>)
ReactDOM.createRoot(document.getElementById("division3")).render(<Division3/>)
ReactDOM.createRoot(document.getElementById("division4")).render(<Division4/>)
ReactDOM.createRoot(document.getElementById("division5")).render(<Division5/>)
ReactDOM.createRoot(document.getElementById("division6")).render(<Division6/>)
ReactDOM.createRoot(document.getElementById("testimonial")).render(<Testimonial/>)
ReactDOM.createRoot(document.getElementById("community")).render(<Community/>)
ReactDOM.createRoot(document.getElementById("sidebar")).render(<Sidebar/>)
ReactDOM.createRoot(document.getElementById("canvas")).render(<Canvas/>)
ReactDOM.createRoot(document.getElementById("classroom")).render(<Classroom/>)
ReactDOM.createRoot(document.getElementById("sakai")).render(<Sakai/>)
ReactDOM.createRoot(document.getElementById("blackboard")).render(<Blackboard/>)
ReactDOM.createRoot(document.getElementById("brightspace")).render(<Brightspace/>)
ReactDOM.createRoot(document.getElementById("faq")).render(<FAQ/>)
ReactDOM.createRoot(document.getElementById("privacy")).render(<Privacy/>)

