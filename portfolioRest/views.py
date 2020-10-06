from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project, ProjectImage, GeneralInformation
from .serializers import ProjectSerializer, ProjectImageSerializer, ContactSerializer, GeneralInformationSerializer
# Create your views here.


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'Project List': '/project-list/',
        'Project Details': '/project-detail/<str:pk>',
        'Create Project': '/project-create/',
        'Delete Project': '/project-delete/<str:pk>',
        'Update Project': '/project-update/<str:pk>',
    }
    return Response(api_urls)

@api_view(['GET'])
def generalInformation(request):
    info = GeneralInformation.objects.all()
    serializer = GeneralInformationSerializer(info, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def projectList(request):
    project = Project.objects.all()
    serializer = ProjectSerializer(project, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def projectDetail(request, slug):
    project = Project.objects.get(slug=slug)
    projectImage = ProjectImage.objects.filter(project=project)
    context = {
        "request": request,
    }
    projectSerializer = ProjectSerializer(project, many=False, context=context)
    projectImageSerializer = ProjectImageSerializer(
        projectImage, many=True, context=context)
    parentList = list()
    parentList.append(projectSerializer.data)
    parentList.append(projectImageSerializer.data)
    response = parentList

    return Response(parentList)


@api_view(['GET'])
def searchProjects(request, keyword):
    projectsTitle = Project.objects.filter(title__contains=keyword)
    projectsBackend = Project.objects.filter(backend_category__contains=keyword)
    projectsFrontend = Project.objects.filter(frontend_category__contains=keyword)
    projects = projectsTitle.union(projectsFrontend, all=False)
    projects = projects.union(projectsBackend, all=False)
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def Contact(request):
	serializer = ContactSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)

